console.log('JS ok')
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. (quindi prima del click la griglia è vuota)
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 100 caselle in una griglia 10 x 10.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// crea le dimensioni della griglia
// let dimensioneGriglia = 10;
// let numeroCelle = dimensioneGriglia ** 2;
// const tabelloneEl = document.querySelector('.tabellone')
// aggiungi un evento al bottone una volta premuto il main class(container) deve diventare display block
const dimensioneGriglia = 10;
const numeroCelle = dimensioneGriglia ** 2;
const tabelloneEl = document.querySelector('.tabellone')

button = document.addEventListener('click', function () {
    let buttonStart = document.querySelector(".container").style.display = "block";
    for (let i = 0; i < numeroCelle; i++) {
        const cella = getSquareElelment()
        cella.innerHTML = i + 1;
        tabelloneEl.append(cella)
    }

});
// crea le celle
function getSquareElelment() {
    //     // crea degli elementi div 
    const square = document.createElement('div')
    //     // aggiungi le celle (square) ai div
    square.classList.add('square')
    // creo un evento ed assegno solo il nome della funzione
    square.addEventListener('click', clickHandler)
    console.log(square)
    return square
}

function clickHandler() {
    // console.log(this)
    const square = this
    square.classList.toggle('clicked')

}