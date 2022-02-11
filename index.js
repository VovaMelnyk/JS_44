// console.log([1, 2, 3] === [1, 2, 3]);

// 1) прочитает адресс к первому масиву - link1
// 2) прочитает адресс второго масива - link2
// 3) Сравнивает адреса которие ведут к масиву - разные - поэтому false

// const names = [];

// names.push("Bob", "John");

// console.log("names", names);

// console.log([7, 3, 8, 9, 2].slice(3));
// console.log([7, 3, 4, 5].slice());
//1) создает пустой массив - []
//2) добавляем елемент под индексом 3 - 9
//3) добавляем елемент под индексом 4 - 2

// Очередь и стек

// const que = [1, 2, 3, 4];
// que.push(12);
// const stack = [5, 6, 7, 8, 9];

// const numbers = [1, 2, 3]; // число 1 - порядковый номер у него = 0
// число 2 - порядковый номер у него = 1
// число 3 - порядковый номер у него = 2
// число 6 - порядковый номер у него = 3

// numbers.push(6);
// 1) добавляем елемент в конец масива и присваиваем индекс = 3

// 1) добавляем елемент в начало масива
// 2) Поменять индекс цыфры 1 с 0 на 1
// 2) Поменять индекс цыфры 2 с 0 на 2
// 2) Поменять индекс цыфры 3 с 0 на 3
// [6, 1, 2, 3];

// const numbers = [1, 4, 5, 7];
// numbers.pop()

// const user = {
//   name: "Bob",
//   age: 14,
// };

// console.log(numbers);
// console.log(user);

// [] - масивы
// () - функции и математика
// {} - обекты, цыклы, функции, if else, switch

// function add() {
//   console.log(arguments);
// }

// add(1, 2, 4, 5, 7);

// let counter = 1;
// let total1 = 0;

// while (counter <= 100) {
//   //   console.log(counter);
//   total1 = total1 + counter;
//   counter += 1; //// error here
// }
// console.log("total1", total1);

// let total = 0;
// for (let i = 1; i <= 100; i += 1) {
//   //   console.log(i);
//   total = total + i;
// }
// console.log("total", total);

// let num = 0;
// for (let n = 1000; n / 2 >= 50; n /= 2) {
//   num += 1;
// }

// console.log("num:", num);
// console.log("n", n); /// scope

// # Модуль 2. Занятие 3. Массивы

// ## Example 1 - Базовые операции с массивом

// 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Выведите в консоль первый элемент массива.
// 4. Выведите в консоль последний элемент массива. Код должен работать для массива
//    произвольной длины.
// 5. Удалите первый элемент и выведите его в консоль.
// 6. Вставьте «Country» и «Reggy» в начало массива.

// ```js
// const genres = ;
// ```

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift("Country", "Reggy");
// genres.splice(0, 0, "Country", "Reggy");
// console.log(genres);

// ## Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// которых хранятся в переменной `values` в виде строки. Значения гарантированно
// разделены пробелом.

// ```js
// const values = '8 11';
// ```

// const values = "8 11";
// const valuesArray = values.split(" ");
// console.log("valuesArray", valuesArray);
// const result = valuesArray[0] * valuesArray[1]; // '8' * '11' => 8 * 11 => 88
// console.log(result);

// ## Example 3 - Перебор массива

// Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// Нумерация элементов должна начинаться с `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// ```

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} - ${fruits[i]}`);
//   //   console.log("index", i);
// }

// for (let fruit of fruits) {
//   const index = fruits.indexOf(fruit);
//   const indexForUser = index + 1;
//   console.log(`${indexForUser} - ${fruit}`);
// }

// ## Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В
// переменных `names` и `phones` хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на
// соответствие. Количество имен и телефонов гарантированно одинаковое.
// csv
// ```js
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// ```

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");
// const phonesArray = phones.split(",");

// console.log(namesArray);
// console.log(phonesArray);

// for (let i = 0; i < namesArray.length; i += 1) {
//   console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

// ## Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.

// ```js
// const string = 'Welcome to the future';
// ```

// ## Example 6 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.

// ```js
// const string = 'Welcome to the future';
// ```

// const string = "Welcome to the future";

// const array = string.split(" ");
// const reversedArray = array.reverse();
// const result = reversedArray.join(" ");
// console.log(result);

// const result = string.split(" ").reverse().join(" ");

// ## Example 7 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// любого массива чисел. Используй цикл для решения задачи.

// ```js
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
// ```

// const numbers = [2, 17, 94, 1, 23, 37];

// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log("min", min);

// 1) Кто играет
// 2) Сделать выбор варианта ответа от компюера
// 3 ) Выбор ответа от пользователя
// 4) Написать проверку на выиграш
// const variants = ["Камень", "Ножницы", "Бумага"];
// const randomIndex = Math.floor(Math.random() * variants.length);
// const humanChoice = prompt("Enter your variant");
// const computerChoice = variants[randomIndex];

// if (
//   (computerChoice === "Камень" && humanChoice === "Бумага") ||
//   (computerChoice === "Ножницы" && humanChoice === "Камень") ||
//   (computerChoice === "Бумага" && humanChoice === "Ножницы")
// ) {
//   alert("Вы победили");
// } else if () {
// alert("Вы проиграли");
// } else {
// alert("ничья");
// }

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[3];

// console.log(lastElement);
// Change code below this line

/////////////////////////////////////////////// End lesson # 3

// function add() {
//   const argumentsArray = Array.from(arguments);
//   let total = 0;
//   for (const number of argumentsArray) {
//     total += number;
//   }
//   return total;
// }

// console.log(add(1, 2));
// console.log(add(4, 5, 7, 3, 2));

// function moduleNameToUppercase(moduleName) {
//   return moduleName.toUpperCase();
// }

// moduleNameToUppercase("Module 1"); // moduleName = "Module 1"
// moduleNameToUppercase("Module 15"); // moduleName = "Module 15"
// moduleNameToUppercase("Module 22"); // moduleName = "Module 22"

// # Модуль 2. Занятие 4. Функции

// ## Example 1 - Индекс массы тела

// Напиши функцию `calcBMI(weight, height)` которая рассчитывает и возвращает
// индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на
// квадрат высоты человека в метрах.

// Вес и высота будут специально переданы как строки. Нецелые числа могут быть
// заданы в виде `24.7` или `24,7`, то есть в качестве разделителя дробной части
// может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// ```js

// function calcBMI(weight, height) {
//   return (
//     Number.parseFloat(weight) / Math.pow(Number.parseFloat(height), 2)
//   ).toFixed(1);
// }

// function calcBMI(weight, height) {
//   const result = weight / Math.pow(height, 2);
//   return result.toFixed(1);
// }

// function calcBMI(weight, height) {
//   return (weight / (height * height)).toFixed(1);
// }

// const calcBMI = (weight, height) => (weight / (height * height)).toFixed(1);

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8
// ```

// ## Example 2 - Меньшее из чисел

// Напиши функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

// const min = function (a = 0, b = 0) {
//   if (a > b) {
//     return b;
//   }
//   return a;
// };

// // ```js

// const variantA = Number(prompt("Enter number a"));
// const variantB = Number(prompt("Enter number b"));

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(variantA, variantB));
// ```

// ## Example 3 - Площадь прямоугольника

// Напиши функцию `getRectArea(dimensions)` для вычисления площади прямоугольника
// со сторонами, значения которых будут переданы в параметр `dimensions` в виде
// строки. Значения гарантированно разделены пробелом.

// ```js
// function getRectArea(dimensions) {
//   const numbers = dimensions.split(" ");

//   if (
//     Number.isInteger(Number(numbers[0])) &&
//     Number.isInteger(Number(numbers[1]))
//   ) {
//     return numbers[0] * numbers[1];
//   }

//   return "Вы передали дробные числа";
// }

// function getRectArea(dimensions) {
//   const numbers = dimensions.split(" ");

//   if (
//     !Number.isInteger(Number(numbers[0])) ||
//     !Number.isInteger(Number(numbers[1]))
//   ) {
//     return "Вы передали дробные числа";
//   }
//   return numbers[0] * numbers[1];
// }

// console.log(getRectArea("8 11"));
// console.log(getRectArea("120 23"));

// ```

// ## Example 4 - Логирование элементов

// Напиши функцию `logItems(items)`, которая получает массив и использует цикл
// `for`, который для каждого элемента массива будет выводить в консоль сообщение в
// формате `<номер элемента> - <значение элемента>`. Нумерация элементов должна
// начинаться с `1`.

// Например для первого элемента массива `['Mango', 'Poly', 'Ajax']` с индексом `0`
// будет выведено `1 - Mango`, а для индекса 2 выведет `3 - Ajax`.

// ```js
// function logItems(items) {
//   for (let item of items) {
//     const index = items.indexOf(item) + 1;
//     console.log(index, item);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// ```

// ## Example 5 - Логирование контактов

// Напиши функцию `printContactsInfo(names, phones)` которая выводит в консоль имя
// и телефонный номер пользователя. В параметры `names` и `phones` будут переданы
// строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и
// телефонов в строках указывают на соответствие. Количество имен и телефонов
// гарантированно одинаковое.

// ```js
// function printContactsInfo(names, phones) {}

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
// ```

// ## Example 6 - Поиск наибольшего элемента

// Напиши функцию `findLargestNumber(numbers)`которая ищет самое большое число в
// массиве.

// ```js
// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (let number of numbers) {
//     if (max < number) {
//       max = number;
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

// ## Example 7 - Среднее значение

// Напишите функцию `calAverage()` которая принимает произвольное кол-во аргументов
// и возвращает их среднее значение. Все аругменты будут только числами.

// ```js
// function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

// ## Example 8 - Форматирование времени

// Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
// (количество минут) в строку в формате часов и минут `HH:MM`.

// ```js
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

// ## Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)

// Напишите функции для работы с коллекцией обучающих курсов `courses`:

// - `addCourse(name)` - добавляет курс в конец коллекции
// - `removeCourse(name)` - удаляет курс из коллекции
// - `updateCourse(oldName, newName)` - изменяет имя на новое

// ```js
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```

// function localize(lang = "en") {
//   if (lang === "ru") {
//     return "Привет";
//   }
//   if (lang === "uk") {
//     return "Привiт";
//   }
//   if (lang === "en") {
//     return "Hello";
//   }
// }

// function localize(lang = "en") {
//   if (lang === "ru") {
//     return "Привет";
//   }
//   if (lang === "uk") {
//     return "Привiт";
//   }
//   return "Hello";
// }

// console.log(localize("ru").toUpperCase());
// console.log(localize("uk").toUpperCase());
// console.log(localize().toUpperCase());

// const add = function () { }; // 1

// function add() {} // 2

// const localize = (lang = "en") => {
//   if (lang === "ru") {
//     return "Привет";
//   }
//   if (lang === "uk") {
//     return "Привiт";
//   }
//   if (lang === "en") {
//     return "Hello";
//   }
// };

// const add = (a, b) => a + b;
// const add = (a, b) => {
//   return a + b;
// };

// const numbers = [1, 3, 4, 6, 7];

// const result = numbers.slice().pop().toFixed().toUpperCase();
// console.log(result);

// const result = numbers.concat([23, 45]).splice(0,1).length;
