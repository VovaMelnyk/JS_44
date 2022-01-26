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

// console.log(null > 0)

// console.log(null || (2 && 3) || 4);

// console.log(null || 3 || 4);

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
