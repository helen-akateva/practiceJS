// Дано масив чисел
const numbers = [1, 5, 10, 15, 20, 25, 30];

// Написати функцію getDoubledNumbers(nums), яка поверне масив
// з кожним числом помноженим на 2
// Очікуваний результат: [2, 10, 20, 30, 40, 50, 60]
const getDoubledNumbers = nums => {
  return nums.map(num => num * 2);
};

console.log(getDoubledNumbers([1, 5, 10, 15, 20, 25, 30]));

// Дано масив продуктів
const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Education' },
  { name: 'Headphones', price: 100, category: 'Electronics' },
];

// Написати функцію getProductNames(products), яка поверне масив
// тільки з назвами товарів у верхньому регістрі
// Очікуваний результат: ["LAPTOP", "PHONE", "BOOK", "HEADPHONES"]
const getProductNames = products => {
  return products.map(product => product.name.toUpperCase());
};
console.log(getProductNames(products));

// Дано масив студентів
const students = [
  { name: 'Alice', grades: [90, 85, 92] },
  { name: 'Bob', grades: [78, 81, 79] },
  { name: 'Charlie', grades: [95, 87, 93] },
];

// Написати функцію getStudentAverages(students), яка поверне масив об'єктів
// з ім'ям студента та його середнім балом
// Очікуваний результат:
// [
//   { name: "Alice", average: 89 },
//   { name: "Bob", average: 79.33 },
//   { name: "Charlie", average: 91.67 }
// ]
function getStudentAverages(students) {
  return students.map(student => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / student.grades.length;
    return { name: student.name, average: Number(average.toFixed(2)) };
  });
}

console.log(getStudentAverages(students));
