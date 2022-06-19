const firstControl = document.getElementById("first_item");
const secondControl =document.getElementById("second_item");
const thirdControl = document.getElementById("third_item");

const sliderContainer =document.querySelector(".slides_container");
const CHOSEN_CLASS ="chosen_control";
console.log(sliderContainer);

firstControl.addEventListener("click" , () => {
sliderContainer.style.transform ="translateX(40%)";
secondControl.classList.remove(CHOSEN_CLASS);
thirdControl.classList.remove(CHOSEN_CLASS);
firstControl.classList.add(CHOSEN_CLASS);

});


secondControl.addEventListener("click" , () => {
    sliderContainer.style.transform ="translateX(0%)";
    firstControl.classList.remove(CHOSEN_CLASS);
    thirdControl.classList.remove(CHOSEN_CLASS);
    secondControl.classList.add(CHOSEN_CLASS);

    });


thirdControl.addEventListener("click" , () => {
    sliderContainer.style.transform ="translateX(-40%)";
    secondControl.classList.remove(CHOSEN_CLASS);
    firstControl.classList.remove(CHOSEN_CLASS);
    thirdControl.classList.add(CHOSEN_CLASS);

});


const burger = document.querySelector('.burger')
const menu = document.querySelector('.howPlaneDest')

console.log(menu)

burger.addEventListener('click', () => {
    menu.classList.toggle('menu_open')
    burger.classList.toggle('burger_open')
})

