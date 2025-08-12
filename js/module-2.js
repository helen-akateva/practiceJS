// // Завдання 1: Привітання користувача
// // Створіть функцію greetUser(name, age), яка приймає ім'я та вік користувача і повертає рядок: "Привіт, [ім'я]! Тобі [вік] років."
// // Якщо вік не передано, використовуйте значення за замовчуванням 18.

function greetUser(name, age = 18) {
  return `Привіт, ${name}! Тобі ${age} років.`;
}

// // Завдання 2: Калькулятор знижки
// // Напишіть функцію calculateDiscount(price, discountPercent), яка обчислює фінальну ціну товару зі знижкою.
// // Якщо знижка більше 50 %, застосуйте максимальну знижку 50 %.
function calculateDiscount(price, discountPercent) {
  if (discountPercent > 50) {
    discountPercent = 50;
  }

  let finalPrice = (price * (100 - discountPercent)) / 100;
  return finalPrice;
}

// // Завдання 3: Перевірка парності числа
// // Створіть функцію isEven(number), яка повертає true,
// // якщо число парне, і false, якщо непарне.Додайте перевірку на те, що передано саме число.

function isEven(number) {
  if (typeof number !== 'number') {
    return false;
  }

  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  return typeof number === 'number' && number % 2 === 0;
}

// // Завдання 4: Пошук максимального числа
// // Напишіть функцію findMax(a, b, c),
// // яка приймає три числа і повертає найбільше з них.Використовуйте умовні оператори.
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}

// // Завдання 5: Таблиця множення
// // Що потрібно:
// // Створіть функцію printMultiplicationTable(number),
// //   яка виводить таблицю множення для заданого числа від 1 до 10 у форматі: "5 x 1 = 5"

function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Завдання 6: Підрахунок голосних
// Що потрібно:
// Напишіть функцію countVowels(text), яка підраховує кількість голосних букв у заданому рядку.
// Голосні букви: а, е, и, і, о, у, я, є, ю, ї (як великі, так і малі)

function countVowels(text) {
  let count = 0; // лічильник тут!
  const normalizedMessage = text.toLowerCase();
  const vowels = 'аеиіоуяєюї';

  for (let i = 0; i < normalizedMessage.length; i++) {
    let letter = normalizedMessage[i];

    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count; // не забути повернути результат!
}
