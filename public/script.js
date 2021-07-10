const colors = ["green", "red", "silver", "gray", "white", "brown", "purple", "lime", "yellow", "orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",  () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color=colors[randomNumber];
  btn.style.backgroundColor=colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}