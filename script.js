const home = document.getElementById("home");
const cards = document.getElementById("cards");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const viewerText = document.getElementById("viewerText");

const balloonContainer = document.getElementById("balloons");

const colors = [
  "#ff4d6d",
  "#ff6ec7",
  "#fb7185",
  "#f472b6",
  "#a78bfa",
  "#60a5fa",
  "#38bdf8",
  "#22c55e"
];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  // position
  const xPositions = [5, 15, 25, 35, 45, 55, 65, 75, 85];
  balloon.style.left = xPositions[Math.floor(Math.random() * xPositions.length)] + "%";

  // spawn height: bottom / middle / top
  const spawnZones = [0, 30, 60];
  balloon.style.bottom = spawnZones[Math.floor(Math.random() * spawnZones.length)] + "vh";

  // speed
  const duration = 6 + Math.random() * 8;
  balloon.style.animationDuration = duration + "s";

  const color = colors[Math.floor(Math.random() * colors.length)];

  balloon.innerHTML = `
    <svg viewBox="0 0 32 29">
      <path
        d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0
           C3.8,0,0,3.8,0,8.4c0,9.5,16,20.6,16,20.6s16-11.1,16-20.6
           C32,3.8,28.2,0,23.6,0z"
        fill="${color}"
      />
    </svg>
    <div class="string"></div>
  `;

  balloonContainer.appendChild(balloon);

  // remove after animation ends
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

/* 🎈 keep generating balloons */
setInterval(createBalloon, 1000); // every 1s

function showCards() {
  home.classList.add("hidden");
  cards.classList.remove("hidden");
}

let clickCount = 0;

const sequence = ["pig", "hippo", "her"];

function openCard() {
  if (clickCount >= sequence.length) {
    return;
  }

  const type = sequence[clickCount];
  clickCount++;

  cards.classList.add("hidden");
  viewer.classList.remove("hidden");

  if (type === "pig") {
    viewerImg.src = "pig.jpg";
    viewerText.innerText = "✨ Write your pig message here ✨";
  }

  if (type === "hippo") {
    viewerImg.src = "hippo.jpg";
    viewerText.innerText = "✨ Write your hippo message here ✨";
  }

  if (type === "her") {
    viewerImg.src = "her.jpg";
    viewerText.innerText = "✨ Write your special message for her here 💖 ✨";
  }
}

function closeViewer() {
  viewer.classList.add("hidden");
  cards.classList.remove("hidden");
  if (clickCount === 3) {
    clickCount = 0;
  }

}
