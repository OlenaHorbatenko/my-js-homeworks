var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

services['Фарбування'] = "200 грн";

function getPriceValue(str) {
  return parseFloat(str); // парсим число из строки
}

function price() {
let totalPrice = 0;
for (let key in services) {
    totalPrice += getPriceValue(services[key]);
    }
return totalPrice
}

function minPrice() {
let minPrice = Infinity;
for (let key in services) {
    let val = getPriceValue(services[key])
    if (val < minPrice) minPrice = val
}
return minPrice
}

function maxPrice() {
    let maxPrice = 0;
    for (let key in services) {
        let val = getPriceValue(services[key])
        if (val > maxPrice) maxPrice = val
    }
    return(maxPrice)
}

console.log("загальна вартість наданих послуг:", price());
console.log("мінімальна ціна:", minPrice());
console.log("максимальна ціна.:", maxPrice());