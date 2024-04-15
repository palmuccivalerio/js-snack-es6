// Creazione di un array di oggetti di squadre di calcio
let squadre = [
  { nome: "Squadra1", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra2", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Squadra3", puntiFatti: 0, falliSubiti: 0 }
];

// Funzione per generare un numero casuale
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generazione di numeri random per le proprietà puntiFatti e falliSubiti
for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = getRandomNumber(0, 100);
  squadre[i].falliSubiti = getRandomNumber(0, 100);
}

// Creazione di un nuovo array con solo nomi e falli subiti
let nuovoArray = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// Stampa del nuovo array in console
console.log(nuovoArray);
