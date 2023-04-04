function createTitle(name, text) {
  const title = document.createElement("h1");
  title.setAttribute("class", name);
  title.textContent = text;
  return title;
}
function renderHome() {
  const main = document.querySelector("main");
  const title = createTitle("title", "Aiya Ramen");
  main.appendChild(title);
}
export default renderHome;