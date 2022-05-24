import { refs } from "../refs";

export const drawTemplate = (posts) => {
  return posts?.reduce((acc, post) => {
    return (acc += `<li data-id=${post.id}><p>${post.post}</p><button>delete</button></li>`);
  }, "");
};

export const draw = (posts) => {
  const template = drawTemplate(posts);
  refs.list.innerHTML = template;
};
