// //TODO:============task-02=========================
// // Перебрати числа від 10 до 30, вивести число 15 і зупинити цикл.

// const start = 10;
// const end = 30;

// for (let index = start; index <= end; index++) {
//   if (index === 15) {
//     console.log(index);
//     break;
//   }
// }

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */
//  * Дотатково: вказати в коментарях значення, які автоматично створюються в середині функції
//  * */

function formatTime(minutes) {
  // [[Scope]] = [] область видимості функції
  // minutes = undefined (або передане значення, наприклад 450)
  // arguments = [minutes]

  const hours = Math.floor(minutes / 60);
  // hours = результат Math.floor(minutes / 60) (наприклад, Math.floor(450 / 60) = 7)

  const remainingMinutes = minutes % 60;
  // remainingMinutes = результат minutes % 60 (наприклад, 450 % 60 = 30)

  const doubleDigitHours = String(hours).padStart(2, '0');
  // doubleDigitHours = результат String(hours).padStart(2, '0') (наприклад, "07")

  const doubleDigitMinutes = String(remainingMinutes).padStart(2, '0');
  // doubleDigitMinutes = результат String(remainingMinutes).padStart(2, '0') (наприклад, "30")

  return `${doubleDigitHours}:${doubleDigitMinutes}`;
  // return рядок у форматі "ГГ:ХХ" (наприклад, "07:30")
}
console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
