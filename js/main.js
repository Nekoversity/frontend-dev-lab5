const button = document.getElementById("submit");
const resultBox = document.getElementById("result");
const ARRAY_LENGTH = 10;
const ARRAY_MAX = 10;

button.addEventListener('click', () => calculate());

// Returns -1 or 1 randomly
function getRandomSign() {
    return Math.random() < 0.5 ? -1 : 1;
}

function calculate() {
    // Prepare data
    const array = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        array.push(Math.floor(Math.random() * ARRAY_MAX) * getRandomSign());
    }

    let negativeSum = 0;
    array.forEach(e => {
        if (e < 0) negativeSum++;
    });

    resultBox.textContent = `Подано масив чисел [${array.join(", ")}]. Знайдено від'ємних чисел: ${negativeSum}.`;
}
