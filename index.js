const myFunc = id =>{
    const element = document.getElementById(id),
    text = element.innerText.split("");

    element.innerText = "";

    text.forEach((letter,index) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;
        span.style.animationDuration = (index+1) * .2 + .5 + "s";
        element.appendChild(span);
    })
}
myFunc("Mytext");

const burger = document.querySelector(".burger");
const nav_bar = document.querySelector(".ul");

burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    nav_bar.classList.toggle("active");
}) 