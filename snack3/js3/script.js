const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];


Selezionare ogni auto 
creare tre array vuoti con il nome della combustione 
confrontare la chiave alimentazionecon il nome dell'array se e uguale pusharla


const ibrida = []
const benzina=[]
const resto= []

for (let i = 0; i < automobili.length; i++) {
 const aliment = alimentazione[i]
 if(aliment=== "ibrida"){
    ibrida.push[aliment]
 }

}
console.log[ibrida]