// Zadanie 1
const divs = document.querySelectorAll('.more-divs');

function divArr(tags) {
  console.log([...tags].map((e) => e.tagName));
}
divArr(divs);

// Zadanie 2
const sList = document.querySelector('.short-list');

function short(list) {
  // 1
  console.log(list.innerHTML);
  // 2
  console.log(list.outerHTML);
  // 3
  console.log(list.className);
  // 4
  console.log([...list.classList]);
  // 5
  console.log(list.dataset);
}
short(sList);

// Zadanie 3
const el = document.querySelector('#datasetCheck');
const n1 = el.getAttribute('data-numberOne');
const n2 = el.getAttribute('data-numberTwo');
const n3 = el.getAttribute('data-number-three');

function calc() {
  sum = Number(n1) + Number(n2) + Number(n3);
  dif = Number(n1) - Number(n2) - Number(n3);
  console.log('Dodawanie: ' + sum);
  console.log('Odejmowanie: ' + dif);
}
calc();

// Zadanie 4
const span = document.querySelector('#spanText');

console.log((span.textContent = 'Nowy tekst'));

// Zadanie 5
const span2 = document.querySelector('#spanText');

console.log((span2.className = 'new-class'));

// Zadanie 6
function modifyElement(element) {
  const classNames = [...element.classList].map((className) => {
    console.log(className);
    return className;
  });
  console.log(classNames.join('+'));
  element.className = '';
  console.log('Usunięto wszystkie klasy');
}

modifyElement(document.getElementById('classes'));

// Zadanie 7
const longListItems = document.querySelectorAll('#longList li');

function addAttribute(elements) {
  elements.forEach((element) => {
    if (!element.dataset.text) {
      element.dataset.text = 'text';
    }
  });
}

addAttribute(longListItems);

// Zadanie 8
const myDiv = document.querySelector('#myDiv');

function createObject(string) {
  let object = {
    newClass: string,
  };
  readObject(object);
}

function readObject(object) {
  let newClass = object.newClass;
  myDiv.className = newClass;
}

createObject('new-class');

// Zadanie 9
const numbers = document.querySelector('#numbers');
const randomNumber = Math.floor(Math.random() * 11);

function addClassNameByNumber(number) {
  if (number % 2 == 0 && number != 0) {
    numbers.className = 'even';
  } else {
    numbers.className = 'odd';
  }
}

addClassNameByNumber(randomNumber);

// Zadanie 10
const longList = document.querySelector('#longList');

function getValuesFromChildrens(element) {
  const childrens = Array.from(element.children);
  const values = childrens.map((child) => child.textContent);
  console.log(values);
  return values;
}

getValuesFromChildrens(longList);

// Zadanie 11
const longList1 = document.querySelector('#longList');

function modifyValue(elements) {
  [...elements].forEach((element) => {
    const currentValue = element.textContent;
    const randomNumber = Math.floor(Math.random() * 11);
    element.dataset.oldValue = currentValue;
    element.textContent = randomNumber;
  });
}

modifyValue(longList1.children);
