const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Play the music when the button is clicked
musicBtn.addEventListener("click", function() {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "Play Music";
  }
});

