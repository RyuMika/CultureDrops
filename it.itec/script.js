

function playSound(id) {
  const allAudio = document.querySelectorAll("audio");

  allAudio.forEach(audio => {
    if (audio.id !== id) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  const currentAudio = document.getElementById(id);
  currentAudio.play();
}


function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}