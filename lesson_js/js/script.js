"use strict"

 
//завдання 1
// У консоль потрапить - 1, бо оператор ++ збільшує значення someVar на 1

//завдання 2
for (let i = 1; i <= 10; i++) {
    console.log(`Пункт №${i}`)
}

//завдання 3
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
// У консоль нічого не потрапить, тому що умова в if (...) є false
// false || false $$ true || false
// false $$ true -> fals (різні типи номер === рядок)


//завдання 4
function divide(a = 0, b = 1) {
    if (typeof a !== `number` || typeof b !== `number`||  b === 0) {
        return "Результат ділення: Упс! Щось не так із введеними числами."
    }
    return "Результат ділення: ${a / b}"
}
console.log(divide(10, 2))     
console.log(divide(7, 0))      
console.log(divide("wow", 5))   
console.log(divide())


//завдання 5
const itNum = [7, "text", "10", 10, true]
itNum.forEach(num => {
    if (num === 10) {
      console.log(`Знайдено число 10`)  
    }
})