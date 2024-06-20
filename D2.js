/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio1*****')

let number1 = 80;
let number2 = 80;

if (number1 > number2) {
  console.log('il numero maggiore è ' + number1);
} else if (number1 < number2) {
  console.log('il numero maggiore è ' + number2);
} else {
  console.log('i numeri sono uguali');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio2-soluzione1*****')

let number3 = 8;

if (number3 === 5) {
  console.log('equal');
} else {
  console.log('not equal');
}

console.log('******Esercizio2-soluzione2*****')
if (number3 !== 5) {
  console.log('not equal');
} else {
  console.log('equal');
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio3*****')

let number4 = 10;

if (number4 % 5 === 0) {
  console.log('divisibile per 5');
} else {
  console.log('non divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio4****')

let number5 = 35;
let number6 = 19;
let myNumb = 8;

if (number5 === myNumb || number6 === myNumb || number5 - number6 === myNumb || number6 - number5 === myNumb || number5 + number6 === myNumb) {
  console.log('una condizione restituisce ' + myNumb);
} else {
  console.log('nessuna delle condizioni restituisce ' + myNumb);
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio5****')

let totalShoppingCart = 30;
let delivery = 10;
let checkout;



if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + delivery;
}
console.log(checkout);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio6****');

let discount = 0.2; // (cosi si scrivono i 20%)
totalShoppingCart = totalShoppingCart * (1 - discount); // (100% - 20% )

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart;
} else {
  checkout = totalShoppingCart + delivery;
}
console.log(checkout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio7****')

let numb1 = 10;
let numb2 = 115;
let numb3 = 80;
if (numb1 > numb2 && numb1 > numb3) {
  if (numb2 > numb3) {
    console.log(numb1, numb2, numb3);
  } else {
    console.log(numb1, numb3, numb2);
  }
} else if (numb2 > numb1 && numb2 > numb3) {
  if (numb1 > numb3) {
    console.log(numb2, numb1, numb3);
  } else {
    console.log(numb2, numb3, numb1);
  }
} else {                                  //soluzione1 per l'ultima parte
  if (numb1 > numb3) {
    console.log(numb3, numb1, numb2);
  } else {
    console.log(numb3, numb2, numb1);
  }
}
/*}else{
  if(numb3 > numb1 && numb3 > numb2)      //soluzione 2 per l'ultima parte appesantita
    if(numb1 > numb2){
    console.log (numb3,numb1, numb2);
  }else{
    console.log(numb3, numb2, numb1);
  }
}*/

/*let num1 = 8;
let num2 = 1;
let num3 = 4;
let array = [num1, num2, num3];
array.sort();
console.log (array);  */       //soluzione con array ma arrivati a 10 non va

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio8soluzione1****')

let vaLue = "12";

if (typeof vaLue === "number") {
  console.log("Number");
} else if
  (typeof vaLue === "string") {
  console.log("Stringa");
} else {
  console.log("Non è ne un numero ne una stringa");
}


console.log('******Esercizio8_soluzione2****')

if (typeof vaLue === "number") {
  console.log("Number");
} else {
  console.log("Not Number");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio9****')
const newNr = 4;

if ((newNr % 2) === 0) {
  console.log('Numero pari')
} else {
  console.log('Numero dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio10_soluzione1****')


let val = 14;
if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

console.log('******Esercizio10_soluzione2****')

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio11****')
console.log(me);

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio12****')

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio13****')

me.skills.pop();
console.log(me);

/*console.log('******Esercizio13-soluzione 2****')//quando voglio eliminare più array partendo dalla fine
me.skills.length = me.skills.length -1;
console.log(me);*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio14****')

/*let myArray = new Array();
console.log(myArray);

myArray = ['1','2','3','4','5','6','7','8','9','10'];
console.log(myArray);*/  //ho creato un costrutture che è myArray

const myArr = [];
myArr[0] = 1;
myArr[0] = 2;
myArr[0] = 3;
myArr[0] = 4;
myArr[0] = 5;
myArr[0] = 6;
myArr[0] = 7;
myArr[0] = 8;
myArr[0] = 9;
myArr[0] = 10;
console.log(myArr);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('******Esercizio15****')

myArr[9] = '100';
console.log(myArr);
