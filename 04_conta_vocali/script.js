/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsCount (stringa) {
    let vowels = 0;

    // ciclo su stringa 

    for (let i =0 ; i < stringa.length; i++) {

        let carattere = stringa.charAt(i);

        if(["a","e","i","o","u"].includes (carattere)) {
            vowels += 1;
        }
    }
    return vowels;
}
// Invoca la funzione qui e stampa il risultato in console

console.log("il numero delle vocali corrisponde a:", vowelsCount(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)