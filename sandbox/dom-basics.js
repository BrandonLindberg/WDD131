const newImage = document.createElement("img")
newImage.setAttribute("src", "https://picsum.photos/200")
newImage.setAttribute("alt", "Not found")
document.body.append(newImage)


const myList = ["one", "two", "three"]
const newDiv = document.createElement("div");
newDiv.innerHTML = `<ul><li>${myList[0]}</li><li>${myList[1]}</li><li>${myList[2]}</li></ul>`;
document.body.appendChild(newDiv);