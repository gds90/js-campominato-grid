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
let grid = document.getElementById('grid');

// recupero il bottone che genererà la griglia
const playButton = document.getElementById('play')

// associo al bottone recueperato un eventListener che mi permetterà di formare la griglia
playButton.addEventListener('click', function(){
    
    // svuoto l'elemento grid per evitare di generare più griglie 
    grid.innerHTML = "";

    // tramite un ciclo for, creo le 100 celle numerate della griglia aiutandomi con la funzione creata precedentemente
    for (let i=0; i<100; i++){
        let numberedCell = createCell(i+1);

        // BONUS Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

        // creo un event listener per ogni cella creata che mi permette di colorarla di azzurro quando viene cliccata
        numberedCell.addEventListener('click', function(){
            this.classList.toggle('clicked');
            console.log("Hai cliccato la cella numero: " + numberedCell.textContent);
        })


        // FINE BONUS

        grid.appendChild(numberedCell);
    }
})




