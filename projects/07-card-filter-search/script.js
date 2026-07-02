// 07 - Card Filter Search
// Goal: filter an array and re-render the results.

const tools = [
  { name: "DOM Lab", tags: ["js", "dom", "events"] },
  { name: "Flexbox Notes", tags: ["css", "layout"] },
  { name: "Weather API", tags: ["api", "fetch", "json"] },
  { name: "Local Storage Todo", tags: ["js", "storage", "crud"] }
];

const searchInput = document.querySelector("#searchInput");
const toolList = document.querySelector("#toolList");

function renderTools(items) {
  // TODO 1: clear toolList.
  // TODO 2: if items.length is 0, show "No matches found."
  // TODO 3: otherwise create cards for each item.
}

function filterTools() {
  const searchText = searchInput.value.toLowerCase().trim();

  // TODO 4: use tools.filter() to keep matching tools.
  // Hint: match if tool.name includes searchText OR any tag includes searchText.

  // TODO 5: call renderTools(filteredTools).
}

searchInput.addEventListener("input", filterTools);
renderTools(tools);
