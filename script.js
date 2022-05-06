// 1 Определить дедлайн
// 2 Вычитать текущую дату и дедлайн
// 3 Разницу конвертировать в удобный для пользователя формат
// 4 Кнопка которая отвечает за запуск таймера
// 5 Кнопка которая отвечает за остановку таймера

// const deadline = new Date('2022-05-25');
// let timerID;
// const refs = {
//     days: document.querySelector('.days'),
//     hours: document.querySelector('.hours'),
//     minutes: document.querySelector('.minutes'),
//     seconds: document.querySelector('.seconds'),
//     startBtn: document.querySelector('button'),
//     stopBtn: document.querySelector('.stop'),
// }
// function timer () {
// const today = Date.now()
// const delta = deadline - today;
// const seconds = Math.floor(delta / 1000 % 60);
// const minutes = Math.floor(delta / 1000 / 60 % 60);
// const hours = Math.floor(delta / 1000 / 60 / 60 % 24)
// const days = Math.floor(delta / 1000 / 60 / 60 / 24); // +

// const formatedSeconds = seconds >= 10 ? seconds : `0${seconds}` ;
// const formatedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
// const formatedHours = hours >= 10 ? hours : `0${hours}`;
// const formatedDays = days >= 10 ? days : `0${days}`;

// refs.days.textContent = formatedDays;
// refs.hours.textContent = formatedHours;
// refs.minutes.textContent = formatedMinutes;
// refs.seconds.textContent = formatedSeconds;
// }

// refs.startBtn.addEventListener('click', () => timerID = setInterval(timer, 1000));
// refs.stopBtn.addEventListener('click', () => clearInterval(timerID));

console.log("a");
console.log("b");

// console.log("total", total);

// const promiseForLoop = new Promise((resolve, reject) => {
//   let total = 0;

//   for (let i = 0; i < 10; i += 1) {
//     total += i;
//   }
//   if (total % 10 === 0) {
//     resolve(total);
//   } else {
//     reject("Promise Error");
//   }
// });

// promiseForLoop
//   .then((result) => {
//     console.log("result", result);
//     return result;
//   })
//   .then((result) => console.log("result in second then", result))
//   .catch((err) => console.log(err));

function asyncLoop(count) {
  return new Promise((resolve, reject) => {
    let total = 0;

    for (let i = 0; i < count; i += 1) {
      total += i;
    }
    if (total % 10 === 0) {
      resolve(total);
    } else {
      reject("Promise Error");
    }
  });
}

// asyncLoop(100)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.race
// Promise.all
// Promise.allSettled

// Promise.all([asyncLoop(100), asyncLoop(1000), asyncLoop(10)])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.race([asyncLoop(100), asyncLoop(1000), asyncLoop(10)])
//   .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Promise.allSettled([asyncLoop(100), asyncLoop(1000), asyncLoop(10)])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.resolve(10);

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));
