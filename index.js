import villains from "./arrays.js";


const generate = document.querySelector(".btn-decrease");
const names = document.querySelector("h2");



let images = document.querySelector(".images");

// FOR THE VILLAINS
let generateImage = () => {
  let n1 = Math.floor(Math.random() * 31);

  let randomImage = "images/v" + n1 + ".png";

  images.setAttribute("src", randomImage);

}


generate.addEventListener("click", () => {

    let n = Math.floor(Math.random() * 724);

    names.innerHTML = villains[n];


    generateImage();

     
 })