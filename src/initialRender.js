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
  const aboutBtn = createBtn("aboutBtn", "About");
  const contactBtn = createBtn("contactBtn", "Contact");
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(aboutBtn);
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
  const reference = document.createElement("div");
  const background = document.createElement("div");
  reference.setAttribute("class", "reference");
  reference.textContent = "Referred to link here for design";
  background.setAttribute("class", "background");
  background.textContent = "Background images by link here"
  footer.appendChild(reference);
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