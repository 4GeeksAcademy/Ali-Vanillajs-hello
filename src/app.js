/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('#the-excuse').innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ['Carlos ', 'The dog ', 'Destiny ', 'The government '];
  let action = ['destroyed my ', 'peed on my ', 'ate my ', 'kidnapped my '];
  let what = ['car.', 'homework.', 'laptop.', 'life.'];

  let randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return randomElement(who) + randomElement(action) + randomElement(what);
};
