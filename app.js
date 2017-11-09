function playSound(evt) {
  evt = evt || window.event;
  // get the data-key attribute
  const audioElement = document.querySelector(`audio[data-key='${evt.keyCode}']`);
  if (!audioElement) return;
  const visualElement = document.querySelector(`div[data-key='${evt.keyCode}']`);
  // add the playing class
  visualElement.classList.add("playing");
  // rewind before playing (allows multiple concurrent taps to register)
  audioElement.currentTime = 0;
  // play the data-key matching audio file
  audioElement.play();
}
function removeTransition(evt) {
  if (evt.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
