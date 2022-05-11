const newsBox = document.querySelector(".news-box");

// для того чтобы получит один пост нам нужно повесить слушателя на все посты!
// присвоить каждой Li dat attribute для того чтобы можно было понять по какой LI мы тегнули!
// получить id и по нему сдеоать запрс
// после того как получили data нужно вставить под блок самого title

// часть для получения постов и ох отрисовки готова!!

const data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    throw new Error(res.status);
  })
  .then((data) => {
    const allPosts = data.reduce(
      (acc, post) => acc + `<li data-id='${post.id}'>${post.title}</li>`,
      ""
    );

    newsBox.insertAdjacentHTML("beforeend", allPosts);
  });

newsBox.addEventListener("click", (event) => {
  const { target } = event;
  const currentTouchPostBox = target;
  const postId = target.dataset.id;

  if (postId) {
    // нунжно дял того чтобы не делать запрсы если нет id
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => {
        currentTouchPostBox.insertAdjacentHTML(
          "beforeend",
          `<p class='description'>${post.body}</p>`
        );
      })
      .finally(() => {
        // нужно как вариант для того чтобы не вызывать повторно запрс
        currentTouchPostBox.setAttribute("data-id", "");
      });
  }
});
