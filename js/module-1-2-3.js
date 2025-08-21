// // ЗАДАЧА 1: Функція getFirstName
// // Напиши функцію getFirstName(fullName), яка приймає повне ім'я (рядок) і повертає тільки перше ім'я.
// // Варіант 1
// // function getFirstName(fullName) {
// //   return fullName.split(' ').slice(0, 1).join('');
// // }
// // // Варіант 2
// // function getFirstName(fullName) {
// //   return fullName.split(' ')[0];
// // }

// // Перевірка:
// // console.log(getFirstName('Анна Петренко')); // "Анна"
// // console.log(getFirstName('Іван Іваненко')); // "Іван"
// // console.log(getFirstName('Марія')); // "Марія"
// // console.log(getFirstName('Олександр Сергійович Пушкін')); // "Олександр"

// // ЗАДАЧА 2: Функція countVowels
// // Напиши функцію countVowels(text), яка рахує кількість голосних літер (а, е, и, і, о, у, я, ю) в рядку.

// function countVowels(text) {
//   const vowels = 'аеиіоуяю';
//   let sum = 0;
//   for (const letter of text) {
//     if (vowels.includes(letter)) {
//       sum++;
//     }
//   }
//   return sum;
// }

// // Перевірка:
// console.log(countVowels('привіт')); // 2
// console.log(countVowels('програмування')); // 5
// console.log(countVowels('JavaScript')); // 3
// console.log(countVowels('бкрст')); // 0
// console.log(countVowels('')); // 0

// // ЗАДАЧА 3: Функція getEvenNumbers
// // Напиши функцію getEvenNumbers(numbers), яка повертає новий масив тільки з парними числами.

// function getEvenNumbers(numbers) {
//   const arrayWithEvenNumbers = [];

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       arrayWithEvenNumbers.push(number);
//     }
//   }
//   return arrayWithEvenNumbers;
// }
// Перевірка:
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(getEvenNumbers([1, 3, 5, 7])); // []
// console.log(getEvenNumbers([2, 4, 6, 8])); // [2, 4, 6, 8]
// console.log(getEvenNumbers([])); // []
// console.log(getEvenNumbers([0, 1, 2, 3])); // [0, 2]
