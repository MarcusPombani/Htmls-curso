let itens = document.querySelectorAll("li");
for (i = 0 ; i < itens.length ; i++) {
    itens[i].innerHTML = `Fds é bom, um belo Fds é bom`
}
let pr1 = document.querySelector(`#mud`)

let e1 = () =>{pr1.style.color = `red`}
let e2 = () =>{pr1.innerHTML = `HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR HUE BR `;}
let e3 = () =>{pr1.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor?`;
pr1.style.color = `black`}
   pr1.addEventListener(`click`, e1)
   pr1.addEventListener(`mouseenter`, e2)
   pr1.addEventListener(`mouseout`, e3)