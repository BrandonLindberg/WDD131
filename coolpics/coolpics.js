const menuButton = document.querySelector("button");
const galleryClick = document.querySelector(".gallery");
const mainBody = document.querySelector("body");

function displayMenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("hide");
}

function viewHandler(event) {
    const target = event.target;
    let targetSrc = target.getAttribute("src");
    const newSrc = targetSrc.split("-");

    const splitImg = newSrc[0]
    let newImg = splitImg + "-full.jpeg"

    mainBody.insertAdjacentHTML("afterbegin", viewerTemplate(newImg, "full image"))
    const closeView = document.querySelector(".close-viewer")

    closeView.addEventListener("click", closeViewer);
}

function viewerTemplate(image, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${image}" alt="${alt}">
    </div>`;
}

function closeViewer() {
    mainBody.querySelector(".viewer").remove();
}

menuButton.addEventListener("click", displayMenu);
galleryClick.addEventListener("click", viewHandler);