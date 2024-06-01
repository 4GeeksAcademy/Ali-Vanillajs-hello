/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('#the-excuse').innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return randomElement(who) + randomElement(action) + randomElement(what) + randomElement(when);
};
