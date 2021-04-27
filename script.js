window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) {
    return; // Stops function from running
  }
  audio.currentTime = 0; // Rewind audio to the start
  audio.play();
});
