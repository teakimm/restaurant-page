
function createAbout(name) {
  const about = document.createElement("div");
  about.setAttribute("class", name);
  about.textContent = "Voted best ramen of 2022 in the Tri-state area, Aiya Ramen is a family-owned buisness that only uses the freshest ingredients. Try out our award winning ramen today!";
  return about;
}
function createHours(name) {
  const hours = document.createElement("div");
  hours.setAttribute("class", name);
  hours.textContent = "Hours:";
  const list = document.createElement("ul");
  let openHours = ["Sunday: 10am - 10pm", "Monday - Thursday: 8am - 9pm", "Friday: 8am - 11pm", "Saturday: 8am - 11pm"]
  for(let i = 0; i < openHours.length; i++) {
    const li = document.createElement("li");
    li.textContent = openHours[i];
    list.appendChild(li);
  }
  hours.appendChild(list);
  return hours;
}
function createExtra(name) {
  const reserve = document.createElement("div");
  reserve.setAttribute("class", name);
  reserve.textContent = "Call us to reserve or order in advance!";
  const br = document.createElement("br");
  const grubHub = document.createElement("img");
  grubHub.src = "https://images.squarespace-cdn.com/content/v1/5e5408489751421bd31438bc/1592606206963-HWBCAT0PINHR80PEUT2B/grubhub.png";
  const uberEats = document.createElement("img");
  uberEats.src = "https://assets.stickpng.com/images/5f4921b668ecc70004ae7047.png";
  reserve.appendChild(br);
  reserve.appendChild(grubHub);
  reserve.appendChild(uberEats);
  return reserve
}
function renderHome() {
  const main = document.querySelector("main");
  const about = createAbout("about");
  const hours = createHours("hours");
  const reserve = createExtra("reserve");
  main.appendChild(about);
  main.appendChild(hours);
  main.appendChild(reserve);

}
export default renderHome;