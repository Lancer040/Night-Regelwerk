let isPlaying = false;
function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
}