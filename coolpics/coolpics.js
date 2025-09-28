const menuButton = document.querySelector("button");

function displayMenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("hide");
}

function viewHandler(event) {
    const target = event.target;
    
}

function viewerTemplate() {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${image}" alt="${alt}">
    </div>`;
}

menuButton.addEventListener("click", displayMenu);