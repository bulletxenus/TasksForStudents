const firstControl = document.getElementById("first_item");
const secondControl = document.getElementById("second_item");
const thirdControl = document.getElementById("third_item");

const sliderContainer = document.querySelector(".slides_container")
console.dir(sliderContainer)

firstControl.addEventListener('click', () => sliderContainer.style.transform = "translateX(60%)")
secondControl.addEventListener('click', () => sliderContainer.style.transform = "translateX(0%)")
thirdControl.addEventListener('click', () => sliderContainer.style.transform = "translateX(-60%)")
