/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 6
let num2 = 5
let max = null

if (num1>num2)
{
  max = num1
}
else {
  max=num2
}
console.log('esercizio 1', max)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num3 = 4

if (num3 !== 5) 
{
   console.log('Esercizio 2 not equal')
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num4=30

if(num4 %5 === 0){
  console.log('Esercizio 3', 'divisibile per 5')
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num5=4
const num6=4

if(num5 ===8 || num6 === 8 || num5+num6 === 8 || num5-num6 === 8 ){
  console.log('Esercizio 4','uno dei due numeri è uguale a 8 o la loro somma/sottrazione è uguale 8')
}
else {console.log('Esercizio 4', 'nessun numero è uguale 8 o la loro somma/sottrazione è 8')}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


let totalShoppingCart = 40
const shipping=10

if (totalShoppingCart>50 ){
  console.log('Esercizio 5', 'Saldo carrello', totalShoppingCart)
}
else{
  totalShoppingCart+= shipping
  console.log('Esercizio 5', 'Saldo carrello', totalShoppingCart)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


let prod1 = 10
let prod2 = 50
let discount = 20

let totalShoppingCart2 = prod1+prod2


let blackfriday = true

const shipping2=10

if(blackfriday= true)
{
  prod1= prod1 - discount/100 * prod1,
  prod2=prod2 - discount/100*prod2,
  console.log(prod1)
  totalShoppingCart=prod1+prod2
}

if (totalShoppingCart2>50){

  console.log('Esercizio 6', 'Saldo carrello', totalShoppingCart)
}
else{
  totalShoppingCart+= shipping
  console.log('Esercizio 6','Saldo carrello', totalShoppingCart)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let Num1 = 1;
let Num2 = 2;
let Num3 = 3;

if (Num1 >= num2 && Num1 >= Num3) {
  if (Num2 >= Num3) {
    console.log(Num1, Num2, Num3);
  } else {
    console.log(Num1, Num3, Num2);
  }
} else if (Num2 >= Num1 && Num2 >= Num3) {
  if (Num1 >= Num3) {
    console.log(Num2, Num1, Num3);
  } else {
    console.log(Num2, Num3, Num1);
  }
} else if (Num3 >= Num1 && Num3 >= Num2) {
  if (Num1 >= Num2) {
    console.log(Num3, Num1, Num2);
  } else {
    console.log(Num3, Num2, Num1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let val=5

if(typeof val === 'number'){
  
  console.log('Esercizio 8', 'il valore è un numero')

}
else{
  console.log('il valore non è un numero')
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numPar=10
if(numPar % 2 === 0 ){
  console.log('Esercizio 9 il numero è pari')
}
else{
  console.log('Esercizio 9 il numero è dispari')
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

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city ='toronto'

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2,1)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array=[]
array.push(1,2,3,4,5,6,7,8,9,10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100
console.log(array)
