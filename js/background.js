const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`;
bgImage.className = "set"
document.body.appendChild(bgImage);

const body = document.getElementsByTagName(body);

body.style.bgImage = `./img/${chosenImage}`;