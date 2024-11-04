let fruit = "orange";
let arrayFruits = {orange: "Citric", mandarine: "Citric", banana: "Drupe"};


if (fruit in arrayFruits){
    console.log("La fruta esta en el array");
} else {
    console.log("Error. La fruta no esta en el array");
}