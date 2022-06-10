const firstControl = document.getElementById("first_item");
const secondControl = document.getElementById("second_item");
const thirdControl = document.getElementById("third_item");

const sliderContainer = document.querySelector(".slides_container")

const CHOSEN_CLASS = 'chosen_control'

firstControl.addEventListener('click', () => {
    sliderContainer.style.transform = "translateX(60%)";
    secondControl.classList.remove(CHOSEN_CLASS)
    thirdControl.classList.remove(CHOSEN_CLASS)
    firstControl.classList.add(CHOSEN_CLASS)
})
secondControl.addEventListener('click', () => {
    sliderContainer.style.transform = "translateX(0%)"
    secondControl.classList.add(CHOSEN_CLASS)
    thirdControl.classList.remove(CHOSEN_CLASS)
    firstControl.classList.remove(CHOSEN_CLASS)
})
thirdControl.addEventListener('click', () => {
    sliderContainer.style.transform = "translateX(-60%)"
    secondControl.classList.remove(CHOSEN_CLASS)
    thirdControl.classList.add(CHOSEN_CLASS)
    firstControl.classList.remove(CHOSEN_CLASS)
})
