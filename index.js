// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

"use strict";

// 1) обыкновенная ф-я
// 2) Стрелочная ф-я

// const user = {
//   name: "John",
//   age: 30,
//   getAge: function () {
//     // let this = user;
//     // return user.age;
//     // return this.age; // user.age
//     console.log(this);

//     const arrowThis = () => {
//       console.log("arrow", this); //user
//     };

//     arrowThis();
//   },

// getName: () => {
//   // let this = пусто
//   console.log(this);
// },
// };

// console.log(user.getAge());
// user.getName();

// window.showThis = function showThis() {
//   console.log(this);
// };

// function showThis() {
//   console.log(this);
// }

// const arrowThis = () => {
//   console.log(this);
// };

// // showThis();
// arrowThis();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.filter((number) => number < 5);
// const filterNumbers = (number) => number < 5;
// const filterNumbersGreater = (number) => number > 5;
// numbers.filter(filterNumbers);
// numbers.filter(filterNumbersGreater);

// console.log(result);

// const user = {
//   name: "John",
//   getName: function (devider, deviderEnd) {
//     return `${devider} ${this.name} ${deviderEnd}`;
//   },
// };

// const hotel = {
//   name: "Resort Hotel",
// };

// console.log(user.getName());
// console.log(hotel.getName());

// call - coma
// apply - array

// console.log(user.getName.apply(hotel, ["!", "&"]));
// console.log(user.getName.call(hotel, "?", "*"));

// const bindedGetName = user.getName.bind(hotel);

// console.log(bindedGetName("?", "*"));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find largest number in array of numbers
// const maxNumber = Array.prototype.call(Math.max(numbers));

// # Модуль 5. Занятие 9. Контекст вызова функции и this

// ## Example 1 - Мастерская драгоценностей

// Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// количеством из свойства `stones`.

// ```js
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {},
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// ```

// ## Example 2 - Телефонная книга

// Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };
//     contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );
// ```

// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// ```js
// const calculator = {};
// ```

// ## Example 4 - Конструктор для объектов пользователей
// Напишите функцию конструктор для объектов пользователей. Объекты должны иметь следующие свойства:
// - `name` - строка
// - `surname` - строка
// - `age` - число
// - `gender - строка
// - getFullName - метод
// - getAge - метод

function User(name, surname, age, gender) {
  // this = {}
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  // return this
}

User.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
};

User.prototype.getAge = function () {
  return this.age;
};

const user = new User("Bob", "Dou", "12", "male");
const user2 = new User("John", "Malkovich", "25", "male");

console.log(user);
console.log(user2);

console.log(user.getFullName());
console.log(user2.getAge());

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);
