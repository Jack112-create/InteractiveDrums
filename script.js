function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) {
    return; // Stops function from running
  }
  audio.currentTime = 0; // Rewind audio to the start
  audio.play();
  console.log(key);
  key.classList.toggle("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; // Skip if its not transform
  }
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
