function checkProbabilityTheory(count) {
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 0; i < count; i ++){
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        console.log(randomNumber);
        if (randomNumber % 2 === 0) {
            evenNumber ++;
        } else 
            oddNumber ++;
    }
    const evenPercentage = (evenNumber/ count * 100).toFixed(2);
    const oddPercentage = (oddNumber / count * 100).toFixed(2);
    //return ( count, evenNumber, oddNumber)


  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", evenNumber);
  console.log("Непарних чисел:", oddNumber);
  console.log("Відсоток парних:", evenPercentage + "%");
  console.log("Відсоток непарних:", oddPercentage + "%");
};
checkProbabilityTheory(100);
