// Задание №1 Написать код где при навидении на кнопку она меняет свои координаты на случайные

// const test = document.querySelector("#test");

// test.addEventListener("click", () => console.log("function #2"));
// test.addEventListener("click", () => console.log("function #1"));
// test.addEventListener("click", () => console.log("function #3"));

// const main = document.querySelector(".main");

// main.addEventListener("click", (e) => {
//   console.log(e.target.dataset.modal);
//   if (e.target.dataset.modal) {
//     console.log("open modal window");
//   }
// });

// window.addEventListener("click", () => console.log("aaaaaaaa"));
// window.addEventListener("click", () => console.log("bbbbbbb"));
// window.addEventListener("click", () => console.log("cccccccccc"));

// const refs = {
//   container: document.querySelector(".container"),
// };

// refs.container.addEventListener("mouseover", (e) => {
//   const elementWidth = e.target.clientWidth;
//   const elementHeight = e.target.clientHeight;
//   const topCoords = Math.floor(
//     Math.random() * (window.innerHeight - elementHeight)
//   );
//   const leftCoords = Math.floor(
//     Math.random() * (window.innerWidth - elementWidth)
//   );

//   e.target.style.top = `${topCoords}px`;
//   e.target.style.left = `${leftCoords}px`;
// });

// let container = document.querySelector(".container");
// function changeCords(e) {
//   let btnHeight = e.target.clientHeight;
//   let btnWidth = e.target.clientWidth;
//   let newTop = Math.floor(Math.random() * (window.innerHeight - btnHeight));
//   let newLeft = Math.floor(Math.random() * (window.innerWidth - btnWidth));
//   e.target.style.top = `${newTop}px`;
//   e.target.style.left = `${newLeft}px`;
// }
// container.addEventListener("mouseover", changeCords);

// add lodash and use throttle and debounce

// Оптимизировать роботу scroll и resize

// function showThis() {
//   console.log(this);
// }

// showThis();
// window.showThis()

// const input = document.querySelector("#textInput");

// function scrollTrack() {
//   console.log("scroll");
// }

// addEventListener("scroll", _.throttle(scrollTrack, 500));

// function resizeTrack() {
//   console.log("resize");
// }

// addEventListener("resize", resizeTrack);

// input.addEventListener(
//   "input",
//   _.debounce(() => console.log("text"), 1000)
// );

// const scrollThrottled = _.throttle(scrollTrack, 500); // create new function

// addEventListener("scroll", scrollThrottled);
// addEventListener("scroll", _.throttle(scrollTrack, 500));

// addEventListener("resize", _.throttle(resizeTrack, 700));

// function trackInputEvent() {
//   console.log("Send data to server");
// }

// const input = document.querySelector("input");

// input.addEventListener("input", _.debounce(trackInputEvent, 1000));

// Оптимизировать роботу события input

// const sendDataToServer = function () {
//   console.log("server call");
//   console.log(input.value);
// };

// const debounceSendDataToServer = _.debounce(sendDataToServer, 300);
// const input = document.querySelector("input");

// input.addEventListener("input", debounceSendDataToServer);

// Написать свое TODO приложение

// Написать сайт на котором при загрузке проигрвывается видео. Как только видео пропадает
// из области видимостя более чем на 60% - ставить его на паузу

// const videoPlayer = document.querySelector("video");

// const handleVideoObserver = () => {
//   if (!videoPlayer.paused) {
//     videoPlayer.pause();
//   } else {
//     videoPlayer.play();
//   }
// };

// const watcher = new IntersectionObserver(handleVideoObserver, {
//   threshold: 0.5,
// });

// watcher.observe(videoPlayer);

// const video = document.querySelector("video");

// let observer = new IntersectionObserver(
//   () => {
//     if (!video.paused) {
//       video.pause();
//     } else {
//       video.play();
//     }
//   },
//   { threshold: 0.6 }
// );

// observer.observe(video);

const refs = {
  form: document.querySelector(".form"),
  list: document.querySelector(".list"),
  input: document.querySelector(".input"),
  deleteBtn: document.querySelector("#deleteBtn"),
};

const submitHandler = (e) => {
  e.preventDefault();
  createListItem(refs.input.value);
  refs.input.value = "";
};

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  refs.list.append(li);
};

const toggleListItemStatus = (e) => {
  e.target.classList.toggle("completed");
};

const clearList = () => {
  refs.list.innerHTML = "";
};

refs.form.addEventListener("submit", submitHandler);
refs.list.addEventListener("click", toggleListItemStatus);
refs.deleteBtn.addEventListener("click", clearList);

// stopPraopagation();

// stopImmediatePropagation();

// <div>
//   <button id="add">add</button>
// </div>;

// button.addEventListener("click", () => console.log("1"));
// button.addEventListener("click", () => console.log("2"));
// button.addEventListener("click", () => console.log("3"));

// div.addEventListener("click", () => console.log("div event"));
