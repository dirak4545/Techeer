const imageList = ['0.jpg','1.jpg','2.jpg'];

const choseImage = imageList[Math.floor(Math.random()*imageList.length)];

const bImage = document.createElement('img');

bImage.src = `/Image/${choseImage}`;

document.body.appendChild(bImage);