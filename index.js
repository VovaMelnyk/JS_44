// Задание №1 создать модальное окно которое будет появляться при нажатии на кнопку
// и закрываться при нажатии на кнопку внутри модалки

// const refs = {
//   openModalBtn: document.querySelector(".open-modal"),
//   overlay: document.querySelector(".overlay"),
//   closeModalBtn: document.querySelector(".close"),
// };

// const toggleModal = () => {
//   refs.overlay.classList.toggle("open");
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);

// const openModal = () => {
//   refs.overlay.classList.add("open");
// };

// const closeModal = () => {
//   refs.overlay.classList.remove("open");
// };

// refs.openModalBtn.addEventListener("click", openModal);
// refs.closeModalBtn.addEventListener("click", closeModal);

// const openModal = () => {
//   refs.overlay.style.display = "block";
// };

// const closeModal = () => {
//   refs.overlay.style.display = "none";
// };

// refs.openModalBtn.addEventListener("click", openModal);
// refs.closeModalBtn.addEventListener("click", closeModal);

// const refs = {
//   openModalBtn: document.querySelector(".open-modal"),
//   body: document.querySelector("body"),
// };

// const overlay = document.createElement("div");
// const modal = document.createElement("div");

// const modalContent = `<h1 class="title">Title</h1>
//             <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos sed blanditiis, optio
//                 molestiae reprehenderit mollitia earum repellat vitae iure magnam, facilis eveniet minima excepturi.
//                 Illo aliquid eligendi dolor vitae.</p>
//             <button class="close">Close</button>`;

// overlay.classList.add("overlay");
// modal.classList.add("modal");

// overlay.appendChild(modal);
// refs.body.prepend(overlay);

// modal.insertAdjacentHTML("beforeend", modalContent);

// refs.closeBtn = document.querySelector(".close");
// refs.overlay = document.querySelector(".overlay");

// const toggleModal = () => {
//   refs.overlay.classList.toggle("open");
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);

// console.log(refs);

// Задание №2 написать калькулятор стоимости продукта

const refs = {
  priceInput: document.querySelector("#price"),
  quantityInput: document.querySelector("#quantity"),
  total: document.querySelector(".total"),
  form: document.querySelector(".form"),
  amount: document.querySelector(".amount"),
  increase: document.querySelector("#increase"),
};

const formHandler = () => {
  refs.total.textContent = countTotal(refs.priceInput, refs.quantityInput);
  refs.amount.textContent = refs.quantityInput.value;
};

const countTotal = (priceInput, quantityInput) => {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const total = (price * quantity).toFixed(2);
  if (isNaN(total)) {
    return `Введите корректные данные`;
  }
  return `${price * quantity} грн`;
};

const increaseHandler = () => {
  let inputMax = Number(refs.quantityInput.max);
  inputMax += 5;
  refs.quantityInput.max = inputMax;
  refs.quantityInput.value = inputMax;
  formHandler();

  console.log(refs.quantityInput.max);
};

refs.form.addEventListener("input", formHandler);
refs.increase.addEventListener("click", increaseHandler);

// Задание №3 Написать код где при навидении на кнопку она меняет свои координаты на случайные

// Задание #4 Сгенерировать сайт используя JS

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: getDate(),
//     };
//     contacts.push(newContact);
//   },
//   generateId() {
//     console.log("_" + Math.random().toString(36).substr(2, 9));
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({});
