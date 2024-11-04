let myFavoriteFruit = "lemon";
let myAvailableFruits = ["lemon", "orange", "banana"];

console.log(2 in myAvailableFruits);



// BUSCAR FRUTA MEDIANTE OPERACION TERNARIA

let fruit = "lemon";
let availableFruits = new Set (["lemon", "banana", "watermelon"]);

let isAvailable = (availableFruits.has(fruit)) ? "available" : "not available";

console.log(isAvailable);



// BUSCAR FRUTA MEDIANTE SWITCH (IMPORTANTES LOS BREAK)

let myFruit = "lemon";

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("Citric");
        break;
    case "banane":
        console.log("Tropical");
        break;
    case "watermelon":
        console.log("Big fruit");
        break;
}