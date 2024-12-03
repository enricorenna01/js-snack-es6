/*Definisco un array di oggetti*/
const bikes = [
    {
        name: "Bici 1 ",
        peso: 50

    }, {
        
        name: "Bici 2",
        peso: 75

    }, {

        name: "Bici 3 ",
        peso: 60

    }, {

        name: "Bici 4",
        peso: 90

    }, {

        name: "Bici 5",
        peso: 85

}];


/*Logica*/
let minWeightIndex = 0; 
let minWeight = bikes[minWeightIndex] ["peso"];
const bikesLength = bikes.length
for (i = 1; i < bikesLength; i++) {
    const weightBike = bikes[1].peso;

    if (weightBike < minWeight) {
        minWeight = weightBike;
        minWeightIndex = [i];
    }
};

console.log(bikes[minWeightIndex])