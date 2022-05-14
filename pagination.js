const newsBox = document.querySelector(".news-box");
const btn = document.querySelector(".btn");
// 1 получить данные
// нужно первратить данные для того чтобы можно было их отрисовать
// добавить кнопку
// по нажатию на кнопку нужно занружать больше данных
// --- повесить слушатель
// --- по клику на слушатель нужно передать новую стр

const fetchNews = (page = 1) => {
  fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2022-04-13&page=${page}sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(({ articles }) => {
      const allArticles = articles
        .map((article) => `<li>${article.title}</li>`)
        .join("");

      newsBox.insertAdjacentHTML("beforeend", allArticles);
    });
};

// fetchNews();

let currentPage = 1;

// btn.addEventListener("click", () => {
//   currentPage += 1;
//   fetchNews(currentPage);
// });

// ----------- IntersectionObserver ------------
const allCard = document.querySelectorAll(".card");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log("entry", entry.target);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//       observer.unobserve(entry.target);
//     }
//   });
// });

// allCard.forEach((card) => observer.observe(card));

const lastCardObserver = new IntersectionObserver((entry) => {
  const lastCard = entry[0];
  if (lastCard.isIntersecting) {
    currentPage += 1;
    fetchNews(currentPage);
    console.log("load more");
  }
});

lastCardObserver.observe(document.querySelector(".footer:last-child"));
