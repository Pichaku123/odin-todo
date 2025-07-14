import {greeting as msg} from "./greeting";
import cat from "./cat.jpeg";
import "./styles.css"

const image=document.createElement("img");
image.src= cat;
document.body.appendChild(image);
console.log(msg);
