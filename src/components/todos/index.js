import { getPosts, deletePost, addPost } from "../../api";
import { draw } from "../../helpers";
import { refs } from "../../refs";

getPosts().then(draw);

refs.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.forEach((value, name) => {
    post[name] = value;
  });

  await addPost(post);
  const allPosts = await getPosts();
  draw(allPosts);
});

refs.list.addEventListener("click", async (event) => {
  console.log("event", event);
  if (event.target.nodeName === "BUTTON") {
    const id = event.target.parentElement.dataset.id;
    await deletePost(id);
    const allPosts = await getPosts();
    draw(allPosts);
  }
});
