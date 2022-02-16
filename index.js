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
