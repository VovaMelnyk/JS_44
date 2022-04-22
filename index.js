// Задание №1 Написать код где при навидении на кнопку она меняет свои координаты на случайные

// const test = document.querySelector("#test");

// window.addEventListener("click", () => console.log("aaaaaaaa"));
// window.addEventListener("click", () => console.log("bbbbbbb"));

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

// function scrollTrack() {
//   console.log("scroll");
// }

// function resizeTrack() {
//   console.log("resize");
// }

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
