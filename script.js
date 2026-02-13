function goToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + page).classList.add('active');
}

function startApp(page) {
  playMusic();
  goToPage(page);
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
}

function openGift(gift) {
  if (gift === 1) {
    goToPage(4);
  }
  if (gift === 2) {
    goToPage(5);
    playVideo();
  }
  if (gift === 3) {
    document.getElementById("giftContent").innerHTML =
      "💍 My biggest gift is a lifetime with you 🥰";
  }
}

function playVideo() {
  const video = document.getElementById("memoryVideo");
  if (video) video.play();
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);
