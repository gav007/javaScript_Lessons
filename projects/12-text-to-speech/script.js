// 12 - Text To Speech
// Goal: use the browser's Web Speech API.

const textInput = document.querySelector("#textInput");
const voiceSelect = document.querySelector("#voiceSelect");
const rateInput = document.querySelector("#rateInput");
const pitchInput = document.querySelector("#pitchInput");
const speakBtn = document.querySelector("#speakBtn");
const statusText = document.querySelector("#statusText");

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  // TODO 1: loop through voices and create <option> elements.
  // option.value should be the array index.
  // option.textContent should include voice.name and voice.lang.
}

function speakText() {
  const text = textInput.value.trim();

  // TODO 2: validate text is not empty.
  // TODO 3: create new SpeechSynthesisUtterance(text).
  // TODO 4: set utterance.voice, utterance.rate, utterance.pitch.
  // TODO 5: call speechSynthesis.speak(utterance).
}

speakBtn.addEventListener("click", speakText);
speechSynthesis.addEventListener("voiceschanged", loadVoices);
loadVoices();
