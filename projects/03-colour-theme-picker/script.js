// 03 - Colour Theme Picker
// Goal: react to dropdown changes and adjust CSS variables.

const themeSelect = document.querySelector("#themeSelect");
const themeMessage = document.querySelector("#themeMessage");

function setTheme(themeName) {
  // document.documentElement means the <html> element.
  // CSS variables live there in this project.

  // TODO 1: use if/else if blocks to check themeName.
  // TODO 2: change --accent and --surface with style.setProperty().
  // Example:
  // document.documentElement.style.setProperty("--accent", "#4f46e5");

  themeMessage.textContent = `Current theme: ${themeName}`;
}

themeSelect.addEventListener("change", function () {
  const selectedTheme = themeSelect.value;
  setTheme(selectedTheme);
});
