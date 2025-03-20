// ESERCIZIO UNO - Sezione mail random

console.log('Mail');
const mail = ['GigioBello@gmail.com', 'MarcoVerdi@hotmail.com', 'GuglielmoPaninaro@yahoo.com', 'GioielliFantastici@outlook.com'];
let userMail;
let validMail = false;

//VALID CHECK

while (!validMail) {
    userMail = prompt('Inserire qui la tua mail');
    if(userMail.includes('@') && userMail=includes('.')){
        validMail = true;
    }
    else{
        alert('Questa Mail non è valida');
    }
}
let found = false;