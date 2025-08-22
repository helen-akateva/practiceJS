// Задача 1:
// Колбек-функції і map - Отримати імена студентів
// Напиши стрілочну функцію getStudentNames(students), яка приймає масив об'єктів студентів і повертає масив їх імен.

// Підказка: Використовуй метод map() для створення нового масиву з іменами.
// Тестові дані
// const students = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
//   { name: 'Анна', age: 20, grade: 95 },
// ];

// Твоя функція тут:
const getStudentNames = students => {
  return students.map(student => student.name);
};

// Перевірка:
// console.log(getStudentNames(students));
// Очікуваний результат: ["Олексій", "Марія", "Дмитро", "Анна"]

// Задача 2:
// Filter - Знайти студентів з високими оцінками
// Напиши стрілочну функцію getTopStudents(students, minGrade), яка повертає студентів з оцінкою вище або рівній minGrade.

// Тестові дані
// const students = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
//   { name: 'Анна', age: 20, grade: 95 },
// ];

// Твоя функція тут:
const getTopStudents = (students, minGrade) =>
  students.filter(student => student.grade >= minGrade);
// Перевірка:
// console.log(getTopStudents(students, 90));
// Очікуваний результат: [{ name: "Марія", age: 19, grade: 92 }, { name: "Анна", age: 20, grade: 95 }]

//     Задача 3:
// Find - Знайти студента за іменем
// Напиши стрілочну функцію findStudentByName(students, name), яка знаходить першого студента з вказаним іменем.

// Тестові дані
// const students = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
//   { name: 'Анна', age: 20, grade: 95 },
// ];

// Твоя функція тут:
const findStudentByName = (students, name) => {
  return students.find(student => student.name === name);
};

// Перевірка:
// console.log(findStudentByName(students, 'Марія'));
// Очікуваний результат: { name: "Марія", age: 19, grade: 92 }
// console.log(findStudentByName(students, 'Петро'));
// Очікуваний результат: undefined

//     Задача 4:
// Every - Перевірити всіх студентів
// Напиши стрілочну функцію areAllStudentsAdults(students), яка перевіряє, чи всі студенти старші 18 років.

// Тестові дані
// const students1 = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
// ];

// const students2 = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 17, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
// ];

// Твоя функція тут:
const areAllStudentsAdults = students =>
  students.every(student => student.age >= 18);
// Перевірка:
// console.log(areAllStudentsAdults(students1)); // true
// console.log(areAllStudentsAdults(students2)); // false

//     Задача 5:
// Some - Перевірити наявність відмінників
// Напиши стрілочну функцію hasExcellentStudents(students), яка перевіряє, чи є хоча б один студент з оцінкою 95 або вище.

// Тестові дані
// const students1 = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 94 },
//   { name: 'Дмитро', age: 21, grade: 78 },
// ];

// const students2 = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Анна', age: 20, grade: 97 },
// ];

// Твоя функція тут:
const hasExcellentStudents = students =>
  students.some(student => student.grade >= 95);
// Перевірка:
// console.log(hasExcellentStudents(students1)); // false
// console.log(hasExcellentStudents(students2)); // true

//     Задача 6:
// Reduce - Обчислити середню оцінку
// Напиши стрілочну функцію getAverageGrade(students), яка обчислює середню оцінку всіх студентів.

// Тестові дані
// const students = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
//   { name: 'Анна', age: 20, grade: 95 },
// ];

// Твоя функція тут:
const getAverageGrade = students => {
  const total = students.reduce((sum, student) => sum + student.grade, 0);
  return total / students.length;
};

// Перевірка:
// console.log(getAverageGrade(students));
// Очікуваний результат: 87.5

//     Задача 7:
// ToSorted - Сортування студентів за оцінками
// Напиши стрілочну функцію sortStudentsByGradeDesc(students), яка повертає новий масив студентів, відсортований за оцінками від найвищої до найнижчої.

// Тестові дані
// const students = [
//   { name: 'Олексій', age: 20, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
//   { name: 'Анна', age: 20, grade: 95 },
// ];

// Твоя функція тут:
const sortStudentsByGradeDesc = students =>
  students.toSorted(
    (firstStudent, secondStudent) => secondStudent.grade - firstStudent.grade
  );
// Перевірка:
// console.log(sortStudentsByGradeDesc(students));
// // Очікуваний результат: студенти відсортовані за спаданням оцінок
// console.log('Оригінальний масив не змінився:', students);

//     Задача 8:
// FlatMap - Отримати всі хобі студентів
// Напиши стрілочну функцію getAllHobbies(students), яка повертає плоский масив усіх хобі всіх студентів.

// Тестові дані
// const students = [
//   { name: 'Олексій', hobbies: ['футбол', 'програмування'] },
//   { name: 'Марія', hobbies: ['малювання', 'читання', 'танці'] },
//   { name: 'Дмитро', hobbies: ['музика'] },
//   { name: 'Анна', hobbies: ['спорт', 'кулінарія'] },
// ];

// Твоя функція тут:
const getAllHobbies = students => students.flatMap(student => student.hobbies);
// Перевірка:
// console.log(getAllHobbies(students));
// Очікуваний результат: ["футбол", "програмування", "малювання", "читання", "танці", "музика", "спорт", "кулінарія"]

//     Задача 9:
// Ланцюжок методів - Найкращі студенти за віком
// Напиши стрілочну функцію getTopYoungStudents(students, maxAge, minGrade), яка використовує ланцюжок методів для отримання імен студентів молодше maxAge років з оцінкою не менше minGrade, відсортованих за іменем.

// Тестові дані
// const students = [
//   { name: 'Олексій', age: 22, grade: 85 },
//   { name: 'Марія', age: 19, grade: 92 },
//   { name: 'Дмитро', age: 21, grade: 78 },
//   { name: 'Анна', age: 20, grade: 95 },
//   { name: 'Петро', age: 18, grade: 88 },
// ];

// Твоя функція тут:
const getTopYoungStudents = (students, maxAge, minGrade) =>
  students
    .filter(student => student.age < maxAge && student.grade >= minGrade)
    .map(student => student.name)
    .toSorted();
// Перевірка:
// console.log(getTopYoungStudents(students, 21, 85));
// Очікуваний результат: ["Анна", "Марія", "Петро"] (відсортовані за іменем)

//     Задача 10:
// Комплексна задача - Статистика групи
// Напиши стрілочну функцію getGroupStats(students), яка повертає об'єкт зі статистикою групи: кількість студентів, середній вік, найвища оцінка, найменша оцінка.

// Тестові дані
const students = [
  { name: 'Олексій', age: 20, grade: 85 },
  { name: 'Марія', age: 19, grade: 92 },
  { name: 'Дмитро', age: 21, grade: 78 },
  { name: 'Анна', age: 20, grade: 95 },
];

// Твоя функція тут:
const getGroupStats = students => {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const grades = students.map(student => student.grade);

  return {
    count: students.length,
    averageAge: totalAge / students.length,
    maxGrade: Math.max(...grades),
    minGrade: Math.min(...grades),
  };
};

// Перевірка:
console.log(getGroupStats(students));
// Очікуваний результат:
// {
// count: 4,
// averageAge: 20,
// maxGrade: 95,
// minGrade: 78
// }
