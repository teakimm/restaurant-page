function createItem(src, name, description) {
    const menuItem = document.createElement("div");
    menuItem.setAttribute("class", "menuItem")
    const img = document.createElement("img");
    img.src = src;
    const title = document.createElement("h3");
    title.textContent = name;
    const desc = document.createElement("div");
    desc.textContent = description;
    menuItem.appendChild(title);
    menuItem.appendChild(img);
    menuItem.appendChild(desc);
    return menuItem;
}
function populateMenu(name) {
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    const tonkotsu = createItem("https://static.wixstatic.com/media/ac2bd4_ad18cb9194c44fedaeb2cbcbcb413f05~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp", "Tonkotsu Ramen", "Served with, Pork Chashu, Bamboo Shoot, Wakame, Half Marinated Egg, Nori, Corn, Scallion. (Pork Broth)");
    const miso = createItem("https://static.wixstatic.com/media/ac2bd4_e8c2b2e01edd43eda4ef8195dc50147c~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp", "Miso Ramen", "Served with, Pork Chashu, Bamboo Shoot, Wakame, Half Marinated Egg, Nori, Corn, Scallion. (Pork Broth)");
    const curry = createItem("https://static.wixstatic.com/media/ac2bd4_e7b6776333a14fe8aa93aaaa04548ced~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp", "Curry Ramen", "Served with, Tonkatsu, Half Marinated Egg, Bamboo Shoots, Corn, Wakame, Scallions, Nori. (Pork Broth)");
    const veggie = createItem("https://static.wixstatic.com/media/ac2bd4_d4f87f16fb4e4f3794927b39214cf244~mv2.png/v1/fill/w_124,h_124,usm_1.20_1.00_0.01/file.webp", "Vegetable Ramen", "Served with, Carrots, Dried Tofu, Broccoli, Bamboo Shoot, Wakame, Nori, Corn, Scallion. (Vegetable Broth)");
    menu.appendChild(tonkotsu);
    menu.appendChild(miso);
    menu.appendChild(curry);
    menu.appendChild(veggie);
    return menu;
}
function renderMenu() {
    const main = document.querySelector(".main");
    const menu = populateMenu("menu");
    main.appendChild(menu);
}
export default renderMenu;