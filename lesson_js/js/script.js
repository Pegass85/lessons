"use strict"

/*
 //ДЗ 22

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
    if (typeof a !== `number` || typeof b !== `number`||  !Number.isFinite(a) || 
        !Number.isFinite(b) || b === 0) {
        
        return "Результат ділення: Упс! Щось не так із введеними числами."
    }

    const result = a / b
    if (!Number.isFinite(result)) {
        
        return "Результат ділення: Помилка! Неможливо обчислити результат."
    }

    return `Результат ділення: ${result}`
}
console.log(divide(10, 2))     
console.log(divide(7, 0))      
console.log(divide("wow", 5)) 
console.log(divide(20, NaN))
console.log(divide(-Infinity, 1))  
console.log(divide())


//завдання 5
const itNum = [7, "text", "10", 10, true]
itNum.forEach(num => {
    if (num === 10) {
      console.log(`Знайдено число 10`)  
    }
})

//ДЗ 23


//завдання 1
const bodyElement = document.body
if (bodyElement) {
    console.log(bodyElement)
}

//завдання 2
function createList(itemList = 3) {
    const bodyElement = document.body;

    if (!bodyElement) {
        console.warn("bodyElement не знайдено.");
        return;
    }
    const list = document.createElement("ul")
    list.classList.add("list")
    for (let i = 0; i < itemList; i++){
        const listItem = document.createElement("li")
        listItem.classList.add("list__item")
        listItem.textContent = `Item №${i + 1}`
        list.appendChild(listItem)
    }
    bodyElement.appendChild(list)
    console.log(list)
}

/*
function createList(itemList = 3) {
    const bodyElement = document.body;

    if (!bodyElement) {
        console.warn("bodyElement не знайдено.");
        return;
    }

    const list = document.createElement("ul");       // створюємо <ul>
    list.classList.add("list");                      // додаємо клас

    for (let i = 0; i < itemList; i++) {             // цикл по кількості елементів
        const listItem = document.createElement("li");
        listItem.classList.add("list__item");        // додаємо клас до <li>
        listItem.textContent = `Item №${i + 1}`;     // текст з номером
        list.appendChild(listItem);                  // додаємо <li> в <ul>
    }

    bodyElement.appendChild(list);                   // вставляємо список у <body>
    console.log(list);                               // виводимо для перевірки
}
    */
/*
//завдання 3
const bodyElement2 = document.body
bodyElement2.classList.add(`loaded`)
if (bodyElement2.classList.contains(`loaded`)) {
    bodyElement2.style.color = `green`   
}
console.log(bodyElement2)

//завдання 4
const itemElement = document.querySelectorAll(`.item`)
if (itemElement.length) {
    itemElement.forEach((itemElement, index) => {
        itemElement.classList.add(`active`)
        itemElement.innerHTML=`element № ${index+1}`
    })
}

//завдання 5
const button = document.querySelector('.button')
if (button) {
    button.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    })
}

*/
//завдання 6
// const link = document.querySelector(`.link`)
// if (link) {
//     link.dataset.count = `100`
//     const count = Number(link.dataset.count)
//     if (count < 200)
//         link.style.color = `red`
// }


//ДЗ 24

// const button = document.querySelector(`.button`)
// button.addEventListener("click", () => {

    // button.classList.toggle(`active`)
    // button.innerHTML === `hello!` ? button.innerHTML = `bye!` : button.innerHTML = `hello!`
    // button.style.backgroundColor = "yellow"
    // button.style.color = "black"
    // const someElement = document.documentElement
    // someElement.classList.toggle(`active`)
//})
   
// якщо потрібно надати більше різних дій
// const button = document.querySelector(`.button`)

// button.addEventListener("click", addHtmlClass)
// // наведення миші
// // button.addEventListener("mouseenter", addHtmlClass)
// // втрата наведення миші
// // button.addEventListener("mouseleave", addHtmlClass)
// // //рух миші
// // button.addEventListener("mousemove", addHtmlClass)

// function addHtmlClass() {
//     const someElement = document.documentElement
//     someElement.classList.toggle(`active`)
// }

// делегування події

document.addEventListener("click", documentAction)
//document.addEventListener("mousemove", documentAction)

function documentAction(e) {
    //console.log(e)
    //console.log(e.type)
    //console.log(e.target)

    //}

    // const tag = e.target.tagName;
    // if (tag === "BUTTON") {
    //     alert(`BUTTON`)
    // }

    const targetElement = e.target
    
    if (targetElement.closest(`.button`)) {
        const currentElement = targetElement.closest(`.button`)
        changeClass(currentElement)
        const tag = currentElement.tagName
        if (tag === "A") {
            e.preventDefault()
        }
    }
}

function changeClass(element) {
    element.classList.toggle(`active`)
}

// зміна пположення при появі(універсальний код)!!!

const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3,
}
const callback = (entries, observer) => {
    entries.forEach(entry => {
        const currentElement = entry.target
        if (entry.isIntersecting) {
            currentElement.classList.add(`animate`)
            console.log(`Seeee`)
        }
        else {
            currentElement.classList.remove(`animate`) //ця функція додає повтор анімації
            console.log(`Non Seeee`)
        }
    })
}
const observer = new IntersectionObserver(callback,options)

const animElements = document.querySelectorAll(`[class*="--anim"]`) 
animElements.forEach(animElement => {
      observer.observe(animElement)
})
  

//повільне з'явлення завантаженої сторінки

window.addEventListener("load", pageLoaded)

function pageLoaded(e) {
    document.documentElement.classList.add('loaded')
}







//задача 1

// const items = document.querySelectorAll('.item');

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('active');
//     });
// });

// //задача 2

// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });
  
// //задача 3

// const header = document.querySelector('header');
// const footer = document.querySelector('footer');

// header.addEventListener('mouseenter', () => {
//   footer.style.backgroundColor = 'yellow'; // новий колір
// });

// header.addEventListener('mouseleave', () => {
//   footer.style.backgroundColor = 'purple'; // початковий колір
// });


// //задача 4

// const options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 1,
//   };
  
//   const callback = (entries, observer) => {
//     entries.forEach(entry => {
//       const currentElement = entry.target;
//       if (entry.isIntersecting) {
//         observer.unobserve(currentElement); 
//         let i = 0; 
//         const timer = setInterval(() => {
//           intervalFunction(i, currentElement);
//           i++;
//           if (i >= count) {
//             clearInterval(timer);
//           }
//         }, delay);
//       }
//     });
//   };
  
//   const myItem = document.querySelector('.item');
//   const count = +myItem.dataset.count || 5;
//   const delay = +myItem.dataset.delay || 1000;
  
//   const observer = new IntersectionObserver(callback, options);
//   observer.observe(myItem);
  
//   function intervalFunction(i, elem) {
//     elem.textContent = `${i}`;
//   }
  