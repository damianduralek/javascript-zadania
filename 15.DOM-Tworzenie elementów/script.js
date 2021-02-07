// Zadanie 1
const newDiv = document.createElement('div');
newDiv.textContent = 'To jest nowy element';
document.getElementById('root').appendChild(newDiv);

// Zadanie 2
const fruitsList = document.createElement('ul');

const fruits = [
  'Melon',
  'Blueberries',
  'Raspberries',
  'Banana',
  'Apple',
  'Peach',
  'Pear',
];

fruits.forEach((fruit) => {
  const li = document.createElement('li');
  item.textContent = fruit;
  fruitsList.appendChild(li);
});

document.getElementById('root').appendChild(fruitsList);

// Zadanie 3
fruitsList.addEventListener('click', () => {
  const items = fruitsList.children;
  for (let i = 0; i < items.length; i++) {
    if (i % 2 !== 0) {
      fruitsList.removeChild(items[i]);
    }
  }
});

// Zadanie 4
const newButton = document.createElement('button');
newButton.textContent = 'Click ME!';
document.getElementById('root').appendChild(newButton);

newButton.addEventListener('click', (e) => {
  e.currentTarget.remove();
});

// Zadanie 5
const randomNumber = Math.floor(Math.random() * 11);

for (let i = 0; i <= randomNumber; i++) {
  const randomDiv = document.createElement('div');
  randomDiv.textContent = `To jest div nr ${i}`;
  document.getElementById('root').appendChild(randomDiv);
}
