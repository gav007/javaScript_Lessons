// 06 - Array List Render
// Goal: turn JavaScript data into visible HTML.

const products = [
  { name: "Notebook", price: 3.5, category: "college" },
  { name: "USB-C cable", price: 9.99, category: "tech" },
  { name: "Coffee", price: 2.8, category: "survival" }
];

const renderBtn = document.querySelector("#renderBtn");
const cardList = document.querySelector("#cardList");

function renderProducts() {
  // TODO 1: clear cardList.innerHTML.
  // TODO 2: loop through products with forEach.
  // TODO 3: create an article element for each product.
  // TODO 4: set article.innerHTML with product.name, product.price, product.category.
  // TODO 5: append the article into cardList.
}

renderBtn.addEventListener("click", renderProducts);
