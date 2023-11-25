/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

 */

//TOOLS:
//Input tags (label, input text and save-btn)
//event listener
// getElementById to save input-tags values
//set variables (number_km, passenger_age, ticket_price)
//define conditions
//print message(calcule result) on html page

const generateBtnElement = document.querySelector("#generate");
const ageInputElement = document.querySelector("#age");
const KmInputElement = document.querySelector("#km");

const ageValue = parseInt(ageInputElement.Value);
const KmValue = parseInt(KmInputElement.Value);

let ticket_price


generateBtnElement.addEventListener("click", function () {

    if (ageValue < 18) {
        ticket_price = (kmValue * 0.21 - 20 / 100 * (KmValue * 0.21));
        const messageElement = document.querySelector("#price").innerHTML = ticket_price.toFixed(2)

    } else if (ageValue > 65) {
        ticket_price = (kmValue * 0.21 - 40 / 100 * (kmValue * 0.21));
        const messageElement = document.querySelector("#price").innerHTML = ticket_price.toFixed(2)
    } else {
        ticket_price = (kmValue * 0.21);
        const messageElement = document.querySelector("#price").innerHTML = ticket_price.toFixed(2)
    }
}
)








