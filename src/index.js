import { calc } from "./scripts/calc";
import "./styles/calc.css";
import imgUrl from "./images/img.png";

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("red");
body.append(container);

const img = document.createElement("img");
img.src = imgUrl;
body.append(img);

console.log(calc(4, 5));
