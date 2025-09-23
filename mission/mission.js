const themeSelector = document.querySelector("select");
const image = document.querySelector(".logo");

function changeTheme()
{
    if (themeSelector.value == "dark") {
        document.body.classList.add("dark-mode");
        image.src = "byui-logo_white.png";
    }

    else {
        document.body.classList.remove("dark-mode");
        image.src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);
