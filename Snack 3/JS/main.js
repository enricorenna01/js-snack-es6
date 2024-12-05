function getElements(array, numA, numB) {
    if (numB < numA) return "Wrong";

    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (i >= numA && i <= numB) {
            result.push(array[i]);
        }
    }

    return result;
}


const myArray = [
    "Topolino",
    "Pluto",
    "Pippo",
    "Paperino",
];


console.log(getElements(myArray, 1, 4));