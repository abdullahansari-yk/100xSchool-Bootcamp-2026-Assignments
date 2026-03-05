const container = document.querySelector("#container");
const buttons = document.querySelectorAll(".colorButton");

// console.log(buttons)

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.id);

    container.style.backgroundColor = e.target.id;
  });
});

const add=document.querySelector("#add")
// console.log(add)
add.addEventListener('click',(e)=>{
    console.log(e.target)
})