// 16 - Soundboard Vanilla
// Goal: practise data attributes and keyboard events.
// Note: this starter uses generated oscillator sounds, so you do not need audio files yet.

const buttons = document.querySelectorAll("[data-sound]");
const statusText = document.querySelector("#statusText");

function playTone(frequency, durationMs) {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.frequency.value = frequency;
  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + durationMs / 1000);
  oscillator.stop(audioContext.currentTime + durationMs / 1000);
}

function playSound(soundName) {
  // TODO 1: if soundName is "click", playTone(300, 120).
  // TODO 2: if soundName is "pop", playTone(500, 120).
  // TODO 3: if soundName is "beep", playTone(700, 120).
  // TODO 4: update statusText.
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // TODO 5: read button.dataset.sound and call playSound().
  });
});

document.addEventListener("keydown", function (event) {
  // TODO 6: find the button with matching data-key.
  // Hint: document.querySelector(`[data-key="${event.key}"]`)
  // TODO 7: if found, call playSound(button.dataset.sound).
});
