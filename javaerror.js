//Java scripts for website

//error if element canot be found//

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

//java script for date//
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

//Java script for the rating system
//Code adapted from https://github.com/codyseibert/youtube/blob/master/vanilla-stars/script.js

const starBox = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    starBox.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if(otherIdx <= clickedIdx) {
        otherStar.classList.add("active");

      }
    
    });
    console.log(`star ${clickedIdx + 1} was clicked`);
  });
});







