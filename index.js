const firstControl = document.getElementById("first_item");
const secondControl = document.getElementById("second_item");
const thirdControl = document.getElementById("third_item");

const firstPicture = document.getElementById('first_slide');
const secondPicture = document.getElementById('second_slide');
const thirdPicture = document.getElementById('third_slide')

const sliderContainer = document.querySelector(".slides_container")

const CHOSEN_CLASS = 'chosen_control'

const showFirst = () => {
    sliderContainer.style.transform = "translateX(60%)";
    secondControl.classList.remove(CHOSEN_CLASS)
    thirdControl.classList.remove(CHOSEN_CLASS)
    firstControl.classList.add(CHOSEN_CLASS)
}

const showSecond = () => {
    sliderContainer.style.transform = "translateX(0%)"
    secondControl.classList.add(CHOSEN_CLASS)
    thirdControl.classList.remove(CHOSEN_CLASS)
    firstControl.classList.remove(CHOSEN_CLASS)
}

const showThird = () => {
    sliderContainer.style.transform = "translateX(-60%)"
    secondControl.classList.remove(CHOSEN_CLASS)
    thirdControl.classList.add(CHOSEN_CLASS)
    firstControl.classList.remove(CHOSEN_CLASS)
}

firstPicture.addEventListener('click', showFirst)
secondPicture.addEventListener('click', showSecond)
thirdPicture.addEventListener('click', showThird)

firstControl.addEventListener('click', showFirst)
secondControl.addEventListener('click', showSecond)
thirdControl.addEventListener('click', showThird)
