// # Модуль 3. Занятие 1. Объекты

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// console.log(keys);

// console.log(user);
// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function calcSalary(salaries) {
//   const values = Object.values(salaries);
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }
//   return total;
// }

// console.log(calcSalary(salaries));
// console.log(calcSalary({}));

// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   WITHDRAW: "withdraw",
//   DEPOSIT: "deposit",
// };

// // /*
// //  * Каждая транзакция это объект со свойствами: id, type и amount
// //  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     // this = account
//     return this.balance; // account.balance
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;

//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
// // ```

// console.log(account.getBalance());
// account.deposit(450);
// account.deposit(50);
// account.withdraw(100);
// account.deposit(100);
// account.withdraw(50);
// console.log(account.getBalance());

// console.log(account.getTransactionDetails(0));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account);

// const string = "The brown fox jumps over lazy dog";

// function findLongestWord(string) {
//   const wordArray = string.split(" ");
//   let result = wordArray[0];
//   for (let word of wordArray) {
//     if (word.length >= result.length) {
//       result = word;
//     }
//   }
//   return result;
// }

// console.log(findLongestWord(string));

// const user = {
//   name: "Bob",
//   email: "user@gmail",
//   //   info: {
//   //     age: 23,
//   //     gender: "male",
//   //   },
// };

// console.log(user.info && user.info.age);
// console.log(user.info?.age);

// console.log(user && user.info && user.info.age);
// console.log(user?.info?.age);

// function getExtremeElements(array) {
//   console.log(array);
// }

// getExtremeElements([1, 3, 5, 6, 8]);

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult"; // stop
//   }
//   return "You are a minor";
// }

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult"; // stop
//   } else {
//     return "You are a minor";
//   }
// }

// const user = {
//   name: "Bob",
//   age: 13,
//   status: true,
// };

// for (let key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(user);

// const objKey = prompt("Enter key name");

// function showValue(obj, keyName) {
//   console.log(obj[keyName]);
// }

// showValue(user, objKey);

// const key = prompt("Enter key name");
// const value = prompt("enter value");

// const user2 = {
//   [key]: value,
// };

// console.log(user2);

/////////////////////////////////////////////// lesson #6

// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// console.log(calcBMI('1.75', '88,3));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     height: "1.65",
//     weight: "68,3",
//   })
// );
// console.log(
//   calcBMI({
//     height: "1.95",
//     weight: "118,3",
//   })
// );
// ```

// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo(data) {
//   const { names, phones } = data;
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });
// ```

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// function getBotReport({ companyName, bots }) {
//   const { repair, defence } = bots;
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // // Было
// // // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // // Ожидается
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.

// ```js
// // Решение
// function getStockReport({ companyName, stock }) {
//   //   const { repairBots, defenceBots } = stock;
//   //   const total = repairBots + defenceBots;
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операция spread

// Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
// объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
// значением "default" если в `partialContact` нет такого свойства.

// ```js
// // Решение
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// function createContact(contact) {
//   return {
//     id: null,
//     createAt: null,
//     list: "default",
//     ...contact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// ```

// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// ```js
// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// function transformId({ firstName, lastName, ...otherValues }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherValues,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```

// const user = {
//   email: "user@gmail.com",
//   age: 12,
// };

// const { email: userEmail } = user;

// // const userEmail = user.email

// console.log("email", email);

// function foo({ username } = {}) {
//   // {username : 'Bob'}
//   console.log(username);
// }

// foo();
// foo({ username: "Bob" });

// const firstObj = { A: 1, B: 2 };
// const secondObj = { A: 3, C: 4 };
// const thirdObj = {
//   A: 5,
//   ...firstObj,
//   ...secondObj,
//   C: 6,
// };

// // {A: 5}
// // {A: 1, B:2}
// // {A: 3, B:2, C: 4 }
// // {A: 3, B:2, C: 6 }

// console.log(thirdObj);

// function foo(a, b, c, ...args) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("args", args);
// }

// const foo = function (a, b, c, ...args) {

// }

// foo(1, 2, 3, 4, 5);

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = [...numbers]; // const newNumbers = [] // const newNumbers = [1,2,3,4,5]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       //   console.log(this.potions[i]);
//       if (this.potions[i].name === newPotion.name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);

//     return this.potions;
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); // 1
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// function calc(stones, stoneName) {
//   for (let stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// function calc(stones, stoneName) {
//   for (let { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       return price * quantity;
//     }
//   }
// }

// function calc(stones, stoneName) {
//   let result = 0;
//   for (let { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       result = price * quantity;
//     }
//     return result;
//   }
// }

// console.log(calc(stones, "Щебень"));

// const users = [];
// const user = {};

// 1) Спрашивать у пользователя товары которые он хочеть курпить
// 2 ) Добавлять эти товары в корзину
// 3) Страшивать должны до тех пор пока он не нажмет "Отмена" или "ESC"
// 4) Вывести список товаров в консоль

// const cart = [];
// let item = "";
// do {
//   item = prompt("Enter item name");
//   if (item !== null) {
//     console.log("oldCart", [...cart]);
//     cart.push(item);
//     console.log("newCart", [...cart]);
//   }
// } while (item !== null);

// console.log(cart);
