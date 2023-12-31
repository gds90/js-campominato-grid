// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata (click su un pulsante... cosa dovrà essere chiamata? Quindi cosa dobbiamo definire prima?).
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// creo una funzione che mi permette di creare una cella con all'interno un numero (x)
function createCell(x){
    const cell = document.createElement('div');

    // aggiungo la classe 'cell' alla cella creata
    cell.classList.add('cell')

    // aggiungo il numero (x) all'interno della cella
    cell.innerText = x;

    return cell
}

// recupero l'elemento che conterrà la griglia
const grid = document.getElementById('grid');

// recupero il bottone che genererà la griglia
const playButton = document.getElementById('play')

// associo al bottone recueperato un eventListener che mi permetterà di formare la griglia
playButton.addEventListener('click', function(){
    
    // svuoto l'elemento grid per evitare di generare più griglie 
    grid.innerHTML = "";
    
    // tramite un ciclo for, creo le 100 celle numerate della griglia aiutandomi con la funzione creata precedentemente
    for (let i=0; i<100; i++){
        let numberedCell = createCell(i+1);
        grid.appendChild(numberedCell);
    }
})


/* // CORREZIONE FABRIZIO 

// DEFINIZIONE DELLA FUNZIONE CHE CREA GRAFICAMENTE LA SINGOLA CASELLA
function createCell(num){
    const cell = document.createElement('div');

    cell.classList.add('cell');
    square.innerText = num;

    return cell;
}


// DEFINIZIONE DELLA FUNZIONE CHE GENERA LA GRIGLIA DI GIOCO
function createNewGame(){
    const grid = document.getElementById('grid')
    grid.innerHTML = '';
    
    for (let i=1; i<=100; i++){
        // CREAZIONE DELLA SINGOLA CASELLA
        let cell = createCell(i);

        grid.appendChild(cell);
    }
}

// RECUPERO IL PULSANTE PLAY E GLI AGGIUNGO L'EVENT LISTENER
const play_btn = document.getElementById('play');
play_btn.addEventListener('click', function(){
    createNewGame();
})
*/

