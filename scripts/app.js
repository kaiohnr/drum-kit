document.addEventListener('keydown', function (event) {
  const keyboardLetter = event.key;
  playSound(keyboardLetter);
});

const keys = document.querySelectorAll('.key');

const playSound = function (letter) {
  const audio = document.getElementById(letter);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};
