import {Contador} from "./contador.js"

const modal = document.querySelector("dialog");

const p1 = new Contador("Nosotros", document.getElementById("jugador1Container"),0);
const p2 = new Contador("Ellos", document.getElementById("jugador2Container"),0);

document.getElementById("reset").addEventListener("click", ()=> modal.showModal())
document.getElementById("volver").addEventListener("click", ()=> modal.close())
document.getElementById("aceptar").addEventListener("click", ()=> {
    p1.reset();
    p2.reset();
    modal.close()
})



