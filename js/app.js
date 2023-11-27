const arrow = document.querySelector("#left_arrow");
const element = document.querySelector(".menu_two");

console.log(arrow);
arrow.addEventListener("click",() =>{
    console.log("holas")
    console.log(element)
        element.classList.toggle("select");

});

const right_arrow = [...document.querySelectorAll(".right_arrow")];
const element2   = [...document.querySelectorAll(".ficha_tecnica")];

for (let index = 0; index < right_arrow.length; index++) {
    const r_arrow = right_arrow[index];
    const f_tecnica =  element2[index];
    console.log(right_arrow);
    r_arrow.addEventListener("click",()=>{
    console.log(element2);
    f_tecnica.classList.toggle("total");
})
}



