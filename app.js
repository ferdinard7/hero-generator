import heroes from "./hero.js";

const names = document.querySelector("h2");
const heroBtn = document.querySelector(".btn-hero");
const heroImg = document.querySelector(".hero-img");






//  FOR THE HEROES

heroBtn.addEventListener("click", () => {
    let n3 = Math.floor(Math.random() * 1826);
  
    names.innerHTML = heroes[n3];
  
  
  })