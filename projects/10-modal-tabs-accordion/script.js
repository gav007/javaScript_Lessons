// 10 - Modal Tabs Accordion
// Goal: control common UI patterns with classes and data attributes.

const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modalOverlay = document.querySelector("#modalOverlay");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelector("#tabContent");
const accordionBtn = document.querySelector(".accordion-btn");
const accordionPanel = document.querySelector(".accordion-panel");

const tabText = {
  html: "HTML gives the page structure.",
  css: "CSS controls the layout and style.",
  js: "JavaScript adds behaviour and logic."
};

// TODO 1: open modal by removing hidden from modalOverlay.
// TODO 2: close modal by adding hidden.
// TODO 3: when a tab button is clicked, remove active from all tabs, add it to clicked tab, update tabContent.
// TODO 4: make accordion button toggle the panel.
