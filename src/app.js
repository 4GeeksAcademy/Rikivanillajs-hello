
let palos = ["♦", "♥", "♠", "♣"]
let carta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
let color = ["red", "black"]

function fuckingHell (array){
    let nuevoIndice = Math.floor(Math.random() * array.length);
    return array[nuevoIndice];
}

function cartaDef () {

    let nuevoPalo = fuckingHell(palos);
    let nuevaCarta = fuckingHell(carta);
    let otroColor = "black"
    if (nuevoPalo === "♦" || nuevoPalo === "♥") {
        otroColor = "red"
    }

    document.querySelector(".cartaJugada").style.color = otroColor;
    document.querySelector("#paloSuperior").innerHTML = nuevoPalo;
    
    document.querySelector("#numeroActual").innerHTML = nuevaCarta;
    document.querySelector("#paloInferior").innerHTML = nuevoPalo;
};
window.onload=function(){
    cartaDef ();
}