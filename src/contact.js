function renderContact() {
    const main = document.querySelector("main");
    const phone = document.createElement("h2");
    phone.textContent = "Call us today: (XXX)XXX-XXXX"
    const loc = document.createElement("h2");
    loc.textContent = "Visit us at: 9297 Polly Parkway, Danville, USA"
    const image = document.createElement("img");
    image.setAttribute("class", "locationImg")
    image.src = "https://media.istockphoto.com/id/1323763423/vector/city-map-with-some-location-tags.jpg?s=612x612&w=0&k=20&c=j53gxcfkugcY-VxeDx3kb2Dla1wG3q7AdQhiHaLoMGo="
    main.appendChild(phone);
    main.appendChild(loc);
    main.appendChild(image);
}
export default renderContact;