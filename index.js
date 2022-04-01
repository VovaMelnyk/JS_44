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

// function User(name, surname, age, gender) {
//   // this = {}
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.gender = gender;
//   // return this
// }

// User.prototype.getFullName = function () {
//   return `${this.name} ${this.surname}`;
// };

// User.prototype.getAge = function () {
//   return this.age;
// };

// const user = new User("Bob", "Dou", "12", "male");
// const user2 = new User("John", "Malkovich", "25", "male");

// console.log(user);
// console.log(user2);

// console.log(user.getFullName());
// console.log(user2.getAge());

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// Lesson 10

// const Car = function (model, year) {
//   // this = {}
//   this.model = model;
//   this.year = year;
//   // return this
// };

// const car = new Car("BMW", "2020");

// console.log(car);

// class User {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// class ContentEditor extends User {
//   // class in JS
//   constructor(name, surname, age, role) {
//     super(name, surname, age);
//     this.role = role;
//   }
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("Bob", "Dou", "12", "editor"); // {name: "Bob", surname: "Dou", age: "12", role: "editor"}

// const ContentEditor = new User(); // object

// class Car {
//   constructor(model, year) {
//     // this = {}
//     this.model = model;
//     this.year = year;
//     // return this
//   }

//   getYear() {
//     return this.year;
//   }

//   getModel() {
//     return this.model;
//   }

//   #getInfo() {
//     return `${this.model} ${this.year}`;
//   }

//   showInfo() {
//     return `${this.#getInfo()}!`;
//   }
// }

// const car = new Car("BMW", "2020");
// car.#getInfo();
// const audi = new Car("Audi", "2021");

// console.log(car);
// console.log(audi);

// const age = prompt("Введите ваш возраст");

// if (age < 0) {
// } else {
//   console.log("Error");
// }

// if (age > 0) {
//   console.log("Error");
// }

// const result = age < 0 ? null : "Error";
// # Модуль 5. Занятие 10. Прототипы и классы

// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// // ```js
// const mango = new Blogger({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```

// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items = this.items.filter((storageItem) => storageItem !== item);
//   }

// fruits.filter((arrayElement, index, array) => { }))

// 1) [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// 2) item = '🍋'
// 3)
// First loop:
// item = "🍋";
// storageItem = "🍎";
// "🍎" !== "🍋" // true

// 4) result = ["🍎" ]

//Second loop:
// item = "🍋";
// storageItem = "🍋";
// "🍋" !== "🍋" // false
// 4) result = ["🍎" ]

// Third loop:
// item = "🍋";
// storageItem = "🍇";
// "🍇" !== "🍋" // true
// result = ["🍎", "🍇"]
// }

// ```js
// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();

// storage.addItem("🍌");
// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ```

// console.log(storage);
// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   set email(value) {
//     this.#email = value;
//   }
// }

// // ```js
// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter((note) => note.text !== text);
//   }

//   // updatePriority(text, newPriority) {
//   //   this.items = this.items.map((note) => {
//   //     if (note.text === text) {
//   //       note.priority = newPriority;
//   //     }
//   //     return note;
//   //   });
//   // }

//   updatePriority(text, newPriority) {
//     this.items = this.items.map((note) =>
//       note.text === text ? { ...note, priority: newPriority } : note
//     );
//   }
// }

// ```js
// const myNotes = new Notes([]);

// console.log("myNotes", myNotes);

// myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя первая заметка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишите класс `Toggle` который принимает объект настроек `{isOpen: boolean}` и
// объявляет одно свойство `on` - состояние вкл/выкл (true/false). По умолчанию
// значение свойства `on` должно быть `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ```
