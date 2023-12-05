/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

Punti
1)Scrivi un programma che stampi in console i numeri da 1 a 100
    -multipli di 3 stampi "Fizz" al posto del numero
    -multipli di 5 stampi "Buzz"
    -multipli di 3 che di 5 stampi "FizzBuzz"
*/
let row = document.querySelector(".row");

// const list = document.getElementById("number-list");
// console.log(list);
for(let i = 0; i < 100 ; i++){
    const colonna = document.createElement("div");
    colonna.classList.add("col-auto");
    const card = document.createElement("div");
    card.classList.add("square");
    const contenuto = document.createElement("div");
    colonna.append(card);
    card.append(contenuto);
    console.log(i);
    console.log(colonna);
    console.log(card);
    row.append(colonna);
    colonna.classList.add("mb-2")
  
    //controllo multipli di 3 e 5 in contemporanea
    if ((((i + 1) % 3) == 0) && (((i + 1) % 5) == 0)){
        contenuto.append("FizzBuzz");
        row.append(colonna);
        card.classList.add("bg-foruth-color");
    } //controllo multipli di 3
    else if (((i + 1) % 3) == 0){
        contenuto.append("Fizz");
        row.append(colonna);
        card.classList.add("bg-second-color");

    } //controllo multipli di 5
    else if (((i + 1) % 5) == 0){
        contenuto.append("Buzz");
        row.append(colonna);
        card.classList.add("bg-third-color");
    }
    else{
        contenuto.append(i + 1);
        row.append(colonna);
        card.classList.add("bg-main-color");
    }
     
}
