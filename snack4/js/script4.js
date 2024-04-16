const persone = [
    { nome: "Marco", cognome: "Rossi", eta: 25 },
    { nome: "Giulia", cognome: "Bianchi", eta: 17 },
    { nome: "Paolo", cognome: "Verdi", eta: 40 },
    { nome: "Maria", cognome: "Gialli", eta: 15 }
  ];



  const frasiGuida = persone.map(persona => {
    if (persona.eta >= 18) {
      return `${persona.nome} ${persona.cognome} può guidare.`;
    } 
    
  });
  
  
  console.log(frasiGuida);