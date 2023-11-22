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

document.getElementById("submit").addEventListener('click', function(){

    const number_km = document.getElementById('km').value;
    console.log(number_km);
    const passenger_age = document.getElementById('age').value;
    console.log(passenger_age);
    let ticket_price;

if (passenger_age < 18) {
    ticket_price = (number_km * 0.21 - 20/100 * (number_km * 0.21));
    const messageElement = document.getElementById("message").innerHTML = `Il prezzo del biglietto è di € ${ticket_price.toFixed(2)}`


} else if (passenger_age > 65) {
    ticket_price = (number_km * 0.21 - 40/100 * (number_km * 0.21));    
    const messageElement = document.getElementById("message").innerHTML = `Il prezzo del biglietto è di € ${ticket_price.toFixed(2)}`

} else {
    ticket_price = (number_km * 0.21);
    const messageElement = document.getElementById("message").innerHTML = `Il prezzo del biglietto è di € ${ticket_price.toFixed(2)}`
}

}
)


