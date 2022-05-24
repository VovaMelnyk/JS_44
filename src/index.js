import axios from "axios";

// создать форму
// получить data с формы
// сделать запрос на сервер и отправить data с формы
const form = document.querySelector("form");
const list = document.querySelector(".todo-list");

// axios("https://628511c03060bbd347441aa3.mockapi.io/users").then((res) =>
//   console.log("res", res)
// );
const post = {};
// fn unique для отрисовки data как универсальная fn
const drawTemplate = (posts) => {
  const template = posts?.reduce((acc, post) => {
    return (acc += `<li data-id=${post.id}><p>${post.post}</p><button>delete</button></li>`);
  }, "");
  list.innerHTML = template;
  //   list.insertAdjacentHTML("beforeend", template);
};
// fn для получения data
// используем как для первого рендера страницы так и для получения после POST DELETE UPDATE
const getPosts = () => {
  axios("https://628511c03060bbd347441aa3.mockapi.io/posts").then((res) => {
    console.log("получили data ---", res);
    drawTemplate(res.data);
  });
};
//  fn для удаления post
const deletePost = (id) => {
  axios
    .delete(`https://628511c03060bbd347441aa3.mockapi.io/posts/${id}`)
    .then((data) => {
      console.log("получили data после удаления---", data);
      getPosts();
    });
};

getPosts();
// fn нужна дял того чтобы отправить data на server
const addPost = (post) => {
  // принимает {[key]: params}
  axios
    .post("https://628511c03060bbd347441aa3.mockapi.io/posts", post)
    .then(() => {
      //после отправки новых дынных мы делаем запрос за этими данными
      getPosts();
    })
    .catch((error) => {
      throw new Error(`не смогли добавить post, ${error}`);
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.forEach((value, name) => {
    post[name] = value;
  });
  addPost(post);
});

// добавим кнопку для удаления

list.addEventListener("click", (event) => {
  console.log("event", event);
  if (event.target.nodeName === "BUTTON") {
    const id = event.target.parentElement.dataset.id;
    deletePost(id);
  }
});
