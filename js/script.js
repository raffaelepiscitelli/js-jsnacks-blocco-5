/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.*/

const cars = [
    {
        brand: "FIAT",
        model: "500",
        power: "eletric"
    },
    {
        brand: "Mercedes",
        model: "Classe A",
        power: "diesel"
    },
    {
        brand: "BMW",
        model: "M5",
        power: "gas"
    },
    {
        brand: "Alfa Romeo",
        model: "147",
        power: "diesel"
    },
    {
        brand: "KIA",
        model: "Picanto",
        power: "metano"
    },
    {
        brand: "Skoda",
        model: "Fabia",
        power: "gpl"
    },
    {
        brand: "Porsche",
        model: "911",
        power: "gas"
    },
    {
        brand: "Ferrari",
        model: "458",
        power: "gas"
    },
    {
        brand: "Lamborghini",
        model: "Aventador",
        power: "gas"
    },
    {
        brand: "Lotus",
        model: "Espirit",
        power: "gas"
    }];

    const gasCars = cars.filter ((singleCar) => {
        if(singleCar.power === "gas"){
            return true
        }
    });
    console.log(gasCars);

    const dieselCars = cars.filter ((singleCar) => {
        if(singleCar.power === "diesel"){
            return true
        }
    });
    console.log(dieselCars);

    const otherCars = cars.filter ((singleCar) => {
        if(singleCar.power != "diesel" && singleCar.power != "gas"){
            return true
        }
    });
    console.log(otherCars);

