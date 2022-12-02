const result = document.querySelector('.generator');


function generate() {
    result.innerHTML = '';
    let numbersRandom = [];
    for (let i = 0; i < 10; i++) {
        numbersRandom.push(Math.round((Math.random()*20 - 10)));
    }
    result.insertAdjacentHTML("beforeend", `<div>сгенерированное: ${numbersRandom.join(' ')}</div>`);
    let sum = 0;
    let product = 1;
    let min = 10;
    let max = -10;
    for (let i = 0; i < 10; i++) {
        sum += numbersRandom[i];
        product *= numbersRandom[i];
        if (min > numbersRandom[i]) {
            min = numbersRandom[i];
        }
        if (max < numbersRandom[i]) {
            max = numbersRandom[i];
        }
    }
    result.insertAdjacentHTML("beforeend", `<div>сумма: ${sum}</div>`);
    result.insertAdjacentHTML("beforeend", `<div>произведение: ${product}</div>`);
    result.insertAdjacentHTML("beforeend", `<div>минимум: ${min}</div>`);
    result.insertAdjacentHTML("beforeend", `<div>максимум: ${max}</div>`);
    result.insertAdjacentHTML("beforeend", `<div>среднее арифметичекое: ${sum/10}</div>`);
}
