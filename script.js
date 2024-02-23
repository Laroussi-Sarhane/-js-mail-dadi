const listaMail = ["laru@example.com", "gio2@example.com", "massimo@example.com"]

const emailUtente = prompt('inserisci qui la tua mail')

let accessoConsentito = false;

for (let i=0; i < listaMail.length; i++){
  // controllo se lemail è presente
  if(emailUtente === listaMail[i]){
    accessoConsentito = true;
    break;
  }
  

  }
  if (accessoConsentito) {
    console.log("Accesso consentito. Benvenuto!");
} 
  

  // Genera un numero casuale da 1 a 6 per il giocatore
const punteggioGiocatore = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale da 1 a 6 
const punteggioComputer = Math.floor(Math.random() * 6) + 1;

// Stampa i punteggi
console.log("Il giocatore ha ottenuto:", punteggioGiocatore);
console.log("Il computer ha ottenuto:", punteggioComputer);

// Determina il vincitore
let vincitore;

if (punteggioGiocatore > punteggioComputer) {
    vincitore = "Giocatore";
} else if (punteggioGiocatore < punteggioComputer) {
    vincitore = "Computer";
} else {
    vincitore = "Nessun vincitore, è un pareggio";
}

// Stamp
console.log("Il vincitore è:", vincitore);

  




