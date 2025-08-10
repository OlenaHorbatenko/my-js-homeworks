console.log('number' + 3 + 3); // конкатенації рядків => number33
console.log(null + 3); // 0 + 3 = 3;
console.log(5 && "qwerty"); // логичесое И, оба значения true, вернет последнее qwerty
console.log(+'40' + +'2' + "hillel"); // +'40' => 40, +'2' => 2, 40+2=42, + "hillel" конкатенация => 42hillel
console.log('10' - 5 === 6); // 10 - 5 = 5 => false
console.log(true + false); // 1 + 0 = 1
console.log('4px' - 3); // 4px не число => NaN
console.log('4' - 3); // 4 - 3 = 1
console.log('6' + 3 ** 0); // 6 + 3**0 = 6 + 1 = 7
console.log(12 / '6'); // 12/6 = 2
console.log('10' + (5 === 6)); // '10' + false = 10false конкатенация 
console.log(null == ''); // null = undefined, '' - стринг => false
console.log(3 ** (9 / 3)); // 3**3 = 27
console.log(!!'false' == !!'true'); // 'false' и 'true' — это строка, не boolean, Непустая строка → true, !'true' => false (инверсия truthy → false), !!'true' => true (двойная инверсия false → true)=> true
console.log(0 || '0' && 1); // && (И) — выполняется первым, '0' && 1 → 1 Оператор && возвращает последнее значение, если оба true; 0 || 1 → 1 Оператор || возвращает первое true значение => 1
console.log((+null == false) < 1); //(0 == false) < 1, true < 1, 1 < 1 => false
console.log(false && true || true); //&& возвращает первое ложное значение => false, || возвращает первое истинное значение => false || true => true
console.log(false && (false || true)); // скобки первые => true, false && true => false
console.log((+null == false) < 1 ** 5); // +null → 0, 0 == false → true, (true) < 1 ** 5, true < 1 => false
