// try {
//   JSON.parse("test");
// } catch (error) {
//   //   throw new Error("test");
// }

// JSON.parse("test");

// fetch().then().then().catch().finally(Отключить лоадер);

// $teaser
// let string = 'credit card number: 1234-2521-2315 credit card number2: 1234-2521-5897 ',
//   regV = /\b[0-9]{4}-[0-9]{4}-[0-9]{4}\b/g;
//
// console.log(string.match(regV));

// $literals
// let reg = new RegExp();
// let pattern = /win/;
// const string = "text windows win";
// // console.log(string.match(pattern));
// console.log(pattern.test(string));

// $flags
// let pattern = /x/img;
// const string = "text Windows win";
// console.log(string.match(pattern));
// let string = 'Is that all there is?',
//     reg = /is/gi;
// console.log(string.match(reg));
// console.log(reg.test(string));

// $classes
// let string = 'Q5 wq w. www h - wh3whwh';

// const phone = "0876542312";
// const phone = "Q5 wq w. www h - wh3whwh";
// const phone = "Hello hel qeqweqwe 089 ererrwsfd 56 djgkdjfgkdfgj 7 @";

// const pattern = /\d{1,3}/g; // 0 - 9
// const pattern = /\d{2}/g; // 0 - 9
// const pattern = /\D{1,}/g; // 0 - 9

// const pattern = /(\border\b|\bbuy\b)/gi; // 0 - 9
// const pattern = /[0-9a-zA-Z@]/gi // 0 - 9;
// const pattern = /\bQ[a-zA-Z]\+$\b/gi; // 0 - 9;


// const patern = /^(http|https)/;
// const patern = /^(http(s)?)/


// const fileExt = /\.txt$/;
// if (fileExt.test(file.name)) {
//   console.log("txt file");
// }
// console.log(phone.match(pattern));


// let b = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

// let reg = /\bwin\b/gi;
// const string = 'text windows Win';
// console.log(string.match(reg));
// console.log(reg.test(string));

// $quantity
// let string = '92345  123 8 243 467 7 52 34 987 5 qwe 999 1',
//     regV = /\b\w{2,3}\b/g;
// console.log(string.match(regV));
// console.log(regV.test(string));
// $sets
// let string = 'qweqweer: 450',
// let string = '92345  123 8 243 467 7 52 34 987 5 qwe 999 ура 1',
//     regV = /[a-zA-Zа-яА-Я]{3}/g
// //  regV = /^\w+@[a-z]+\.[a-z.]{3}$/g;
// console.log(string.match(regV));
// console.log(regV.test(string));

// console.log(string.match(regV));

// // $boundaries
// let string = '22. sdasd 1 random text 5;',
//   regV = /^\d{2}\..{1,};$/;
// //
// console.log(string.match(regV));

//.

// s \s

// let str = 'The car parked in the ga@age!.';
// //
// let regV = /\..{2,4}$/g;
// console.log(str.match(regV));

// ^
// let str = 'The car par ked in the gar age.';
// let regV = /\b[^c]ar\b/g;
// console.log(str.match(regV));
// /^\w+\.c$/ - '.c'
// console.log(str.match(regV));
// +
// let regV = /\d+/ig;
// let  str = '2597-7896-8974-3698';
// console.log(str.match(regV));

// () |
// let str = 'The car is parked in the garage';
// let regV = /\b(c|g|p)[a-z]{1,}\b/g;
// console.log(str.match(regV));

// const str = 'Javascript';
// const atr = 'JavaScript';
// const reg = /Java(?=script)/;
// console.log(str.match(reg));
// console.log(atr.match(reg));

// let test = `Card Number : 4906962001841822
// Expiration : 02/2020
// CVV / CVC : 288
// Card Name : lilian hellgren
// Card Number : 5226612148865370
// Expiration : 09/2018
// CVV / CVC : 289`;
// let reg = /(\d{16})|(?<=CVC\s:\s)(\d{3})/g;
//
// console.log(test.match(reg));

// let str = 'The fat cat mat sat on the mat.';
// let reg = /(?<=the\s)(fat|mat)/ig;
// //
// console.log(str.match(reg));

// let str = 'windows';
// let reg = /dn/;
//
// console.log(reg.test(str));

// reg.test(str)
