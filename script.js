const adviceContainer = document.getElementById("advice");
const btn = document.getElementById("btn");
const numb = document.getElementById("index");
const url = "https://api.adviceslip.com/advice";

let getAdvice = () => {
    adviceContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => {
        adviceContainer.textContent = `${item.slip.advice}`;
        numb.textContent = `${item.slip.id}`;
    adviceContainer.classList.add("fade")
    });
}

btn.addEventListener("click", getAdvice)
getAdvice();

