// // 1) create ws connection
console.log(window.WebSocket);
const socket = new WebSocket("ws://localhost:8080");
// 2) ask user name
const userName = prompt("Enter your name");
// 3) open event
socket.onopen = () => {
  console.log("open");
  const status = document.querySelector("#status");
  status.classList.add("success");
  status.textContent = "Connected";
};

socket.onclose = () => {
  console.log("close");
  const status = document.querySelector("#status");
  status.classList.add("offline");
  status.textContent = "Close connection";
};

socket.onerror = () => {
  const status = document.querySelector("#status");
  status.classList.add("warning");
  status.textContent = "Warning";
};

socket.onmessage = (event) => {
  const chat = document.querySelector(".msger-chat");
  // console.log(JSON.parse(event.data));
  const message = JSON.parse(event.data);
  const { name, date, text } = message;
  const markup = `<div class="msg ${
    userName === name ? "left-msg" : "right-msg"
  }">
  <div
    class="msg-img"
    style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
  ></div>

  <div class="msg-bubble">
    <div class="msg-info">
      <div class="msg-info-name">${name}</div>
      <div class="msg-info-time">${moment(date).format(
        "HH:MM:ss DD/MM/YYYY"
      )}</div>
    </div>

    <div class="msg-text">
      ${text}
    </div>
  </div>
</div>`;
  chat.insertAdjacentHTML("beforeend", markup);
};

const btn = document.querySelector(".btn");
const closeHandler = () => {
  socket.close();
};
btn.addEventListener("click", closeHandler);

const form = document.querySelector(".msger-inputarea");

function handleSubmit(e) {
  e.preventDefault();
  const input = document.querySelector(".msger-input").value;
  const message = { text: input, date: Date.now(), name: userName };
  socket.send(JSON.stringify(message));
  this.reset();
}

form.addEventListener("submit", handleSubmit);

// const ws = new WebSocket("ws://localhost:8080");

// // 2) ask user name

// const userName = prompt("Enter your name");

// // 3) open event

// ws.onopen = () => {
//   // console.log("open");
//   const status = document.querySelector("#status");
//   status.classList.add("success");
//   status.textContent = "Connected";
// };

// // 4) close event

// ws.onclose = () => {
//   // console.log("close");
//   const status = document.querySelector("#status");
//   status.classList.remove("success");
//   status.classList.add("fail");
//   status.textContent = "Close connection";
// };

// // 5) error event

// ws.onerror = () => {
//   // console.log("error");
//   const status = document.querySelector("#status");
//   status.classList.add("warning");
//   status.textContent = "warning";
// };

// // 6) message event
// ws.onmessage = event => {
//   // console.log(event);
//   const chat = document.querySelector(".msger-chat");
//   const message = JSON.parse(event.data);
//   const { name, date, text } = message;
//   const messageMarkup = `<div class="msg ${
//     name === userName ? "right-msg" : "left-msg"
//   }">
//   <div
//     class="msg-img"
//     style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
//   ></div>

//   <div class="msg-bubble">
//     <div class="msg-info">
//       <div class="msg-info-name">${name}</div>
//       <div class="msg-info-time">${moment(date).format(
//         "HH:MM:ss DD/MM/YYYY"
//       )}</div>
//     </div>

//     <div class="msg-text">
//       ${text}
//     </div>
//   </div>
// </div>`;
//   chat.insertAdjacentHTML("beforeend", messageMarkup);
// };

// // 7)  add close action to btn
// const closeBtn = document.querySelector(".btn");
// const closeHandler = () => {
//   console.log("close func");
//   ws.close();
// };
// closeBtn.addEventListener("click", closeHandler);

// // 8) send action

// const form = document.querySelector(".msger-inputarea");

// function sendMessage(e) {
//   e.preventDefault();
//   const text = document.querySelector(".msger-input").value;
//   const message = { name: userName, date: Date.now(), text };
//   ws.send(JSON.stringify(message));
//   this.reset();
// }

// form.addEventListener("submit", sendMessage);
