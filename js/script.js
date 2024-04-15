const bikeList = [
    {
      bike: "bike3",
      weight: 25,
    },
    {
      bike: "bike2",
      weight: 16,
    },
    {
      bike: "bike3",
      weight: 11,
    },
    {
      bike: "bike4 ",
      weight: 32,
    },
    {
      bike: "bike 5",
      weight:13,
     }
  ];
  
  const notHeavy = document.getElementById("notHeavy");
  let minWeight = bikeList[0].weight;
  let minName = bikeList[0].bike;
  
  bikeList.forEach((curBike) => {
   const {bike, weight} = curBike;
  
   if (weight < minWeight) {
     minWeight = weight;
     minName = bike;
   }
  });
  console.log(minWeight)

  