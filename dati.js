/* somma sottrazione divizione moltiplicazion le %   se è pari o dispari 
stampare su console e writh
 */
window.alert('Iniziamo il gioco! usa i numeri per superare un secolo!!')
let primoNum = window.prompt('Inserisci un numero');
let secoNum = window.prompt('Moltiplica il primo numero con ?');
let totNum = primoNum * secoNum;
document.getElementById('totale').innerHTML = totNum;

if (totNum >= 99) {
    alert('Congratulazioni!! Ora passiamo alle divisioni ');
        
} else {
    window.alert('Mi dispiace, hai sbagliato. Ritenta!!');
};

window.alert('Dividiamo 100 in modo che esca come risultato un quarto di secolo');
var primadiv = window.prompt('Inserisci 100');
var secodiv = window.prompt('Dividilo per ?');
let totdiv = primadiv / secodiv;
document.getElementById('totalediv').innerHTML = totdiv;

if (totdiv == 25) {
    alert('Congratulazioni!! Sei stato bravo!!');
        
} else {
    window.alert('Mi dispiace, hai sbagliato. Devi ripassare le divisioni!!');
};
const tota = totdiv + totNum;
document.getElementById('tot').innerHTML = tota;
if (tota%2 === true ) {
    document.getElementById('pariodisp').innerHTML = 'Pari'
} else {
    document.getElementById('pariodisp').innerHTML = 'Dispari'

};

console.log(totNum + " " + tota + ' ' + totdiv)
document.write('abbiamo moltiplicato' +primoNum +''+'*'+''+ secoNum + ' '+ '=' + totNum + '| e abbiamo diviso'+ ' ' + primadiv + ' '+ '/'+ secodiv + ' '+ '='+ totdiv )
