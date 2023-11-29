// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata (click su un pulsante... cosa dovrà essere chiamata? Quindi cosa dobbiamo definire prima?).
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// creo una funzione che mi permette di creare una cella con all'interno un numero (x)
function createCell(x){
    const cell = document.createElement('div');
    cell.classList.add('cell')
    cell.innerText = x;

    return cell
}

// recupero l'elemento che conterrà la griglia
const grid = document.getElementById('grid');

// recupero il bottone che genererà la griglia
const playButton = document.getElementById('play')

// associo al bottone recueperato un eventListener che mi permetterà di formare la griglia
playButton.addEventListener('click', function(){
    
    // tramite un ciclo for, creo le 100 celle della griglia aiutandomi con la funzione creata precedentemente
    for (let i=0; i<100; i++){
        let numberedCell = createCell(i+1);
        grid.appendChild(numberedCell);
    }
})




