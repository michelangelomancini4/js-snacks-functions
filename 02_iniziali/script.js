/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function genFirstLetter(namesArray) {

    const firstLetter = [];
    for (let i = 0; i < namesArray.length; i++) {
        
        firstLetter[i] = namesArray[i][0];
    }
    return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

const initials = genFirstLetter(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]