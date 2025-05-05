// product.js
const product = document.createElement("div");
product.className = "product";

const items = [
  { src: "./images/image 51.png", alt: "Mac", name: "Mac" },
  { src: "./images/image 52.png", alt: "iPhone", name: "iPhone" },
  { src: "./images/image 45.png", alt: "iPad", name: "iPad" },
  { src: "./images/image 46.png", alt: "Apple Watch", name: "Apple Watch" },
  { src: "./images/image 47.png", alt: "Vision Pro", name: "Vision Pro" },
  { src: "./images/image 48.png", alt: "AirPods", name: "AirPods" },
  { src: "./images/image 49.png", alt: "AirTag", name: "AirTag" },
];

items.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.innerHTML = `
    <img src="${item.src}" alt="${item.alt}" />
    <p>${item.name}</p>
  `;
  product.appendChild(itemDiv);
});

document.body.appendChild(product);
