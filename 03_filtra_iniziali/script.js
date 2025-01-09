/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

// FUNZIONE per creare nuova array
function ifLetterPresent(namesArray, letter) {

   // creazione variabile nuova array
    let newArray = [];

    // ciclo per iterazione lettere
    for (let i = 0; i < namesArray.length; i++) {
        
       if ( namesArray [i][0] === letter ) {

        newArray.push(namesArray[i]);
       }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const presentName = ifLetterPresent(names, "A");
console.log(presentName);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]