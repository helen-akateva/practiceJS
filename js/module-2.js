// Завдання 1: Привітання користувача
// Створіть функцію greetUser(name, age), яка приймає ім'я та вік користувача і повертає рядок: "Привіт, [ім'я]! Тобі [вік] років."
// Якщо вік не передано, використовуйте значення за замовчуванням 18.

function greetUser(name, age = 18) {
  return `Привіт, ${name}! Тобі ${age} років.`;
}

// Завдання 2: Калькулятор знижки
// Напишіть функцію calculateDiscount(price, discountPercent), яка обчислює фінальну ціну товару зі знижкою.
// Якщо знижка більше 50 %, застосуйте максимальну знижку 50 %.
function calculateDiscount(price, discountPercent) {
  if (discountPercent > 50) {
    discountPercent = 50;
  }

  let finalPrice = (price * (100 - discountPercent)) / 100;
  return finalPrice;
}

// Завдання 3: Перевірка парності числа
// Створіть функцію isEven(number), яка повертає true,
// якщо число парне, і false, якщо непарне.Додайте перевірку на те, що передано саме число.

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

// Завдання 4: Пошук максимального числа
// Напишіть функцію findMax(a, b, c),
// яка приймає три числа і повертає найбільше з них.Використовуйте умовні оператори.
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}
