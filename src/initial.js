function loadPage() {
  const content = document.getElementById("content");
  const title = document.createElement("div");
  title.className = "title";
  title.textContent = "yeh";
  content.appendChild(title);
}
export default loadPage;