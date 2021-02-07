// Zadanie 1
const list = document.querySelectorAll('.list');

// Zadanie 2
function showTags(element) {
  const tags = document.querySelectorAll(element);
  console.log(...tags);
}
showTags('input');

// Zadanie 3
const elements = document.querySelector('#list');

// Zadanie 4
function showElements(e) {
  const elements = document.querySelectorAll(e);
  console.log(elements);
}
showElements(['li', 'ul', 'span', 'div.list span', 'div#spans span']);
