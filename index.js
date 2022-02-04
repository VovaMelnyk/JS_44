// const , let, var difference

// var name = "Bob";

// let name = 'Bob'

// const name = "Bob"

// let name = "Bob";
// const age = 45;
// const lastName;
// let status;

// var a = 5;

// var a = 10;

// console.log("a", a);

// let b = 5;

// let b = 10;

// console.log("b", b);

// const a = 5;
// const b = "5";

// let a = 5;

// console.log("a", a++); // 5

// console.log("a", (a = a + 1)); // 6

// console.log("a", a); // 6
// console.log("a", ++a); // 6

// console.log(a == b); // 5 == 5 // true
// console.log(a === b); // false

// console.log("parsInt", Number.parseInt("q24.5"));

// console.log("яблоки", apples);
// console.log("виноград", grapes);

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const result = apples + grapes;
// console.log("result", result);
// console.log("apples + grapes", apples + grapes);

// Замени выражение переопределения комбинированным оператором `+=`.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// const value = 64;
// const result = Math.sqrt(value);
// console.log("result", result);

// console.log("floor", Math.floor(25.5));
// console.log(Math.ceil(25.0000001));
// console.log("first", Math.round(0.5));

// console.log("result", (25.545).toFixed(2));

// console.log("result", 0.1 + 0.2);

// console.log("floor", Math.floor(value));
// console.log("ceil", Math.ceil(value));
// console.log("round", Math.round(value));
// const user1 = 100;
// const user2 = 123;
// const user3 = 34;
// const maxValue = Math.max(user1, user2, user3);

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;

// const result = `${companyName} has ${repairBots} and ${defenceBots}`;

// console.log(result);

// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// const userName = "Bob";
// const budget = 1500000;
// const filmName = "Batman";
// const date = "23.05.2020";
// const filmMessage = `Привет ${userName}, сегодня вишло ${filmName} , с бюджетом ${budget} и дата проката ${date} `;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= "7qqqq");
// // 1) '7qqqq' >= NaN
// // 2) 10 >= NaN

// console.log('2' > '12');

// console.log("12".charCodeAt(0));
// console.log("2".charCodeAt(0));

// console.log("2" < "12");

// console.log('4' == 4);

// console.log('6' === 6);

// console.log("false" === false);

// console.log(1 == true); // true

// console.log( 1 == 1)//

// console.log(1 === true);

// console.log(1 === 1);

// console.log('0' == false);
// 1 ) Number('0') = 0
// 2) Number(false) = 0
// 3) 0 == 0

// Number(true);

// Boolean(12)

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log("Papaya" === "papaya");
// console.log(undefined == null);

// console.log(undefined === null);

// const result = typeof 12;

// console.log("result", result);

// console.log(typeof NaN);
// number;
// string;
// null;
// undefined;
// object;
// Symbol;
// true / false;
// Каким будет результат выражений?

// if ("poly" || "Mango") {
// }

// console.log("poly" || "Mango");
// // true

// 0 || null; // null

// if ("poly" && "Mango") {
// }

// 1) if ("Mango") {

// }

// 2) if (true) {

// }

// "poly" || "Mango"; // false
// A && (B || C) && (D || E);
// console.log(null && "false" && "mango");
// console.log(null || "false" || "mango");
// console.log("false" && "Mango" || null);
// 1) console.log("false" && "Mango"); // "Mango"
// 2) console.log('Mango' || null);
// console.log("Mango" && null || false);

// 1) "Mango" && null // null
// 2) console.log(null || false);

// const q = a && b && c;
// const result = f && a1 && b1 && c1;

// q || d || result || d || f;

// 1) Есть ли отпуск
// 2) Купил билет
// 3) Успел на поезд

//  Есть ли отпуск И Купил билет И Успел на поезд = Едим отдихать

// const vacation = true;
// const ticket = true;
// const train = true

// console.log(vacation && ticket && train);

// const login = prompt("Enter login");
// const password = prompt("Enter password");

// const validLogin = "user";
// const validPassword = "1111";

// login === validLogin && password === validPassword;

// console.log(true && 3);

// const age = prompt("Enter your age");
// const name = prompt("Enter your name");

// if (age > 16 || name === "Bob") {
//   console.log("Привет");
// } else {
//   console.log("Доступ запрещен");
// }

// if (!("Mango" || null)) { // false
//   console.log(1);
// } else {
//     console.log(2);
// }

// const name = "Bob";
// const result = Boolean(name);
// const result2 = !!name;
// // 1) !name => !true => false
// // 2) !false => true
// console.log(result2);
// const age = 16;
// const isPremium = true;
// const result = age > 14;

// age && isPremium && <button>Click me</button>

// if (true && 3) {

// }

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// 1) Нужно купить билет
// 2) Успеть на самалет
// 3) Нужен сертефикат

// Результат - ответ да от таможни

// const ticket = 2;
// const plane = true;
// const paper = -245;

// console.log(ticket && plane && paper);

///////////////////////////////////////// lesson 1 end

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || " " || undefined);

// console.log((1 && null && 2) > 0);
// 1) null > 0
// 2) 0 > 0
// 3) false

// console.log(null || (2 && 3) || 4);
// 1) null || 3 || 4
// 2) 3

// console.log("ghbdsn!" && 25 && null);

// 0
// ''
// false
// NaN
// null
// undefined
// -0

// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).

// const name = "Bob";
// const secondName = null;

// console.log(name === true);
// console.log(Boolean(name) === true);

// Если нам извесно имя пользователя - выводим фразу "Привет {имя}" иначе выводим фразу "Здравствуйте"

// if (Boolean(name) === true) {
// } else {
// }

// let message = "";

// if (name) {
//   message = `Привет ${name}`;
// } else {
//   message = "Здравствуйте";
// }

// let message = name ? `Привет ${name}` : "Здравствуйте";

// const message = secondName ?? "Здравствуйте";
// console.log("message", message);

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// toFixed

// # Модуль 1. Занятие 2. Ветвления. Циклы

// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`

// const answer = prompt("Enter JS full name");

// if (answer === "ECMAScript") {
//   console.log("Верно!");
// } else {
//     console.log("Не знаете? ECMAScript!");
// }

// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

// ```js
// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);
// ```

// ## Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// ```js
// const userInput = prompt('Введите число');
// ```

// const userInput = Number(prompt("Введите число"));
// const userInput = +prompt("Введите число");

// if (userInput > 0) {
//   console.log("Это положительное число");
// } else if (userInput === 0) {
//   console.log("Это ноль");
// } else {
//   console.log("Это отрицательное число");
// }

// switch (true) {
//   case userInput > 0:
//     console.log("Это положительное число");
//     break;
//   case userInput === 0:
//     console.log("Это ноль");
//     break;
//   default:
//     console.log("Это отрицательное число");
//     break;
// }

// let message =
//   userInput > 0
//     ? "Это положительное число"
//     : userInput === 0
//     ? "Это ноль"
//     : "Это отрицательное число";

// ## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.

// ```js
// const a = 120;
// const b = 180;
// ```

// ## Example 5 - Форматирование ссылки (endsWith)

// Напиши скрипт который проверяет заканчивается ли значение переменной `link`
// символом `/`. Если нет, добавь в конец значения `link` этот символ. Используй
// конструкцию `if...else`.

// ```js
// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// // Пиши код выше этой строки
// console.log(link);
// ```

// ## Example 6 - Форматирование ссылки (includes и логическое «И»)

// Напиши скрипт который проверяет заканчивается ли значение переменной `link`
// символом `/`. Если нет, добавь в конец значения `link` этот символ, но только в
// том случае, если в `link` есть подстрока `"my-site"`. Используй конструкцию
// `if...else`.

// ```js
// let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки

// // Пиши код выше этой строки
// console.log(link);
// ```

// ## Example 7 - Форматирование ссылки (тернарный оператор)

// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// ```js
// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);
// ```

// ## Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 9 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```

// ## Example 10 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

// ```js
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }
// ```

// ## Example 11 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// ```js
// const max = 100;
// const min = 20;
// ```

// ## Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// 1) Нужно получить 5 цифер и найти их суму

// let number = null;
// let total = 0;

// for (let i = 0; i < 5; i++) {
//   number = Number(prompt("Enter your number"));
//   total += number;
// }

// console.log(total);
// let count = 0,
//   number = null,
//   total = 0;
// let count = 0;
// let number = null;
// let total = 0;

// while (count < 5) {
//   number = Number(prompt("Enter your number"));
//   total += number;
//   count++;
// }

// let count = 5;
// let number = null;
// let total = 0;

// do {
//   number = Number(prompt("Enter your number"));
//   total += number;
//   count++;
// } while (count < 5);

// for (let i = 0; i > 5; i += 1) {}

// do {

// } while (condition);
// ///////////////////////////

// while (condition) {

// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

//////////////////////////////////////////////// end day 2

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }
// 1) counter = 0 => 0 < 10 => console.log("counter: ", counter); => 0 + 1 => counter = 1
// 2) counter = 1 => 1 < 10 => console.log("counter: ", counter) => 1 + 1 => counter = 2
// 3) counter = 2 => 2 < 10 => console.log("counter: ", counter) => 2 + 1 =< counter = 3
// ........
// 10) counter = 10 10 < 10

// ## Task 1 if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = 10;
// ```

// const hours = prompt("Enter number");

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// switch (true) {
//   case hours < 17:
//     console.log("Pending");
//     break;
//   case hours >= 17 && hours <= 24:
//     console.log("Expires");
//     break;
//   default:
//     console.log("Overdue");
//     break;
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end;
//   const isInRange = number >= start && number <= end;

//   console.log(isInRange);
//   // Change this line

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);

// ## Task 2 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Послезавтра");
// } else {
//   console.log("Дата в будущем");
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сегодня");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Послезавтра");
//     break;
//   default:
//     console.log("Дата в будущем");
//     break;
// }

// ## Task 3 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

// ```js
// const daysUntilDeadline = 5;
// ```

// Task #4 - В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает это число(в первую, вторую, третью или четвертую).

// let minutes = 14;

// if (minutes >= 0 && minutes < 15) {
//   console.log("Первая четверть");
// } else if (minutes >= 15 && minutes < 30) {
//   console.log("Вторая четверть");
// } else if (minutes >= 30 && minutes < 45) {
//   console.log("Третья четверть");
// } else {
//   console.log("Четвертая четверть");
// }

// Task #5 - Спросить в пользователя месяц рождения и показать какое это время года

// let month = prompt("Enter your month on birdth").toLowerCase();
// const january = "января";

// if (month === january || month === "декабрь" || month === "февраль") {
//   console.log("Зима");
// } else if (month === "март" || month === "апрель" || month === "май") {
//   console.log("Весна");
// } else if (month === "июнь" || month === "июль" || month === "август") {
//   console.log("Лето");
// } else if (month === "сентябрь" || month === "октябрь" || month === "ноябрь") {
//   console.log("Осень");
// } else {
//   console.log("Вы вписали не правельный месяц");
// }

// Task #6 - Дана строка из 3-х цифр. Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.

// const string = prompt("Enter number");
// let total = 0;

// if (isNaN(string)) {
//   console.log("Вы ввели не число");
// } else if (string.length !== 3) {
//   console.log("Вы ввели не 3-х значное число");
// } else {
//   // '123'
//   for (let counter = 0; counter < string.length; counter++) {
//     total += Number(string[counter]);
//   }

// console.log(isNaN("12b"));

// if (!isNaN(string)) {
//   // false => !false => true
//   for (let counter = 0; counter < string.length; counter++) {
//     total += Number(string[counter]);
//   }
// } else if (string.length !== 3) {
//   console.log("Вы ввели не 3-х значное число");
// } else {
//   console.log("Вы ввели не число");
// }

// 1) i = 0 => 0 < 3 => i = 0 + 1
// 2) i = 1 => 1 < 3 => i = 1 + 1
// 3) i = 2 => 2 < 3 => i = 2 + 1
// 4) i = 3 => 3 < 3 => цыкл остановился

///////////////
// 1) total = 0 => total = total + Number(string[0]) => total = 0 + 1 => total = 1
// 2) total = 1 => total = total + Number(string[1]) => total = 1 + 2 => total = 3
// 3) total = 3 => total = total + Number(string[2]) => total = 3 + 3 => total = 6

// console.log("total", total);
// let i = 0;
// i++; // 0
// // 1
// ++i; // 1
// // 1

// ## Task #7  - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// Task #8 - Написать игру Камень - Ножницы - Бумага

// Task #9 - Выведите столбец чисел от 1 до 50 использую while, for

// Task #10 - Выведите столбец четных чисел в промежутке от 0 до 100 использую while, for

// Task #11 - С помощью цикла найдите сумму чисел от 1 до 100 использую while, for

// Task #12 - Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится ?
// Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.

// Task #13 - Напишите программу которая спрашивает пароль и имя у пользователя.
// У пользователя есть 3 попытки на ввод пароля
// Если пользователь вводит пароль и он правильный - выводим сообщение "Приветствую тебя {neme}"
// Если пользователь вводит не правельный пароль - выводитм сообщение "Пароль не верный. У тебя осталось {n} попыток"
// Если попытки закончились - выводим сообщение "Попытки закончились Доступ запрещен"

// Task #14 - Написать программу которая спрашивает у пользователя пароль и проверяет его на валидность по количеству симвлолов
// Правила валидации -
// 1) минимум 3 символа, - если символов меньше выводим сообщение "Пароль должен содержать минимум 3 символа"
// 2) максимум 16 символов - если символов больше, выводим сообщение "Пароль должен содержать максимум 16 символов"

// Task #15 - Написать программу которая спрашивает у пользователя почту и проверяет ее на валидность.
// Правила валидации
// 1) минимум 4 символа
// 2) максимум 10 символов
// 3) почта должна содержать символ @
// 4) почта должна содержать символ .
// Если почта не прошла хотябы одну проверку выводим сообщение "Почта не отвечает требованиям".

// const email = prompt("Enter your email");

// if (
//   email.length < 4 ||
//   email.length > 10 ||
//   !email.includes("@") ||
//   !email.includes(".")
// ) {
//   console.log("Почта не отвечает требованиям");
// } else {
//   console.log("Почта валидная");
// }

// if (
//   email.length >= 4 &&
//   email.length <= 10 &&
//   email.includes("@") &&
//   email.includes(".")
// ) {
//   console.log("Почта валидная");
// } else {
//   console.log("Почта не отвечает требованиям");
// }

// console.log("user@gmail.com".includes("@"));

// Task #16 - Написать програму которая спращивает имя пользователя и всегда выводит его в формате Первая буква большая остальные маленькие
// slice

// const string = "heLLo"; // HeLLo , hEllo, HELLO, hello
// 1) Приводим все в нижний регистр
// 2) Первую букву делаем большой
// 3) Обрезать строку и получить часть без первой буквы
// 4) Обеденить первую букву и обрезаную часть

// let lowerCase = string.toLowerCase();
// const firstLetter = lowerCase[0].toUpperCase();
// const cutString = lowerCase.slice(1);
// const result = `${firstLetter}${cutString}`;

// console.log(lowerCase);
// console.log(firstLetter);
// console.log(cutString);
// console.log(result);

// lowerCase[0].toUpperCase();
// lowerCase[0] = lowerCase[0].toUpperCase();
// console.log(lowerCase);

// const result2 = string.toLowerCase().toLocaleUpperCase();
// console.log(result2);

// Hello
