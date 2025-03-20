//ESERCIZIO 2 - DADI

console.log('Dadi');
let userNumber = Math.floor(Math.random() * 6) +1;
let computerNumber = Math.floor(Math.random() * 6) +1;

//PRINT RANDOM

console.log('Il numero è: ' + userNumber);
console.log('Il numero del sistema è: ' + computerNumber);

//CHECK GENERATED NUMBERS

if (userNumber > computerNumber){
    console.log('Questo è il tuo giorno fortunato! Hai vinto!');
}

else if (userNumber < computerNumber){
    console.log('Mi dispiace, dovrai ritentare! Hai perso!');
}

else{
    console.log('Mi dispiace, dovrai ritentare! Pareggio!');
}