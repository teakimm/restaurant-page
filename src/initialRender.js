function createBtn(name, text) {
  const btn = document.createElement("button");
  btn.setAttribute("class", name);
  btn.textContent = text;
  return btn;
}
function createNav(name) {
  const nav = document.createElement("nav");
  nav.setAttribute("class", name);
  const title = document.createElement("h1");
  title.textContent = "AIYA RAMEN"
  nav.appendChild(title);
  const homeBtn = createBtn("homeBtn", "Home");
  const menuBtn = createBtn("menuBtn", "Menu");
  const contactBtn = createBtn("contactBtn", "Contact");
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}
function createMain(name) {
  const main = document.createElement("main");
  main.setAttribute("class", name);
  return main;
}
function createFooter(name) {
  const footer = document.createElement("footer");
  footer.setAttribute("class", name);
  const background = document.createElement("div");
  const link = document.createElement("a");
  link.textContent = "Paulo Doi";
  link.href = "https://unsplash.com/@paulodoi";
  background.setAttribute("class", "background");
  background.textContent = "Photo provided by "
  background.appendChild(link);
  footer.appendChild(background);
  return footer;
}
function initialRender() {
  const content = document.getElementById("content");
  const nav = createNav("nav-bar");
  const main = createMain("main");
  const footer = createFooter("footer");
  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
}
export default initialRender;