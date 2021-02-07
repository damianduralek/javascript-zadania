// Zadanie 1
function Person(
  personName,
  personSurname,
  personAge,
  personCountry,
  perosnCity,
  personLang
) {
  this.name = personName;
  this.surname = personSurname;
  this.age = personAge;
  this.country = personCountry;
  this.city = perosnCity;
  this.language = personLang;
}

Person.prototype.changeAge = function (newAge) {
  this.age = newAge;
  console.log(`Nazwa zmieniona na: ${newAge}`);
};

Person.prototype.changeCity = function (newCity) {
  this.city = newCity;
  console.log(`Miasto zmienione na: ${newCity}`);
};

let person1 = new Person('Marek', 'Markowski', 21, 'Polska', 'Kraków', 'polski');
let person2 = new Person('Jan', 'Janowski', 15, 'Anglia', 'London', 'angielski');
let person3 = new Person('Mikołaj', 'Mikołajowy', 106, 'Niemcy', 'Berlin', 'niemiecki');
let person4 = new Person('Piotr', 'Piotrowy', 22, 'Hiszpania', 'Barcelonan', 'hiszpański');
let person5 = new Person('Kamila', 'Kamilowa', 70, 'Francja', 'Paryż', 'francuski');

person1.changeAge(22);
person1.changeCity('Warszawa');
console.log(person1);

// Zadanie 2
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    console.log('Nie dziel przez 0!');
    return;
  }
  return a / b;
}

function Calculator() {
  this.memory = [];
  this.showMemory = () => console.log(this.memory);
  this.resetMemory = () => (this.memory = []);
  this.calculate = (a, b, operation) => {
    this.memory.push(operation(a, b));
    return operation(a, b);
  };
}

let calc = new Calculator();
let kalk = new Calculator();

console.log(calc.calculate(5, 10, add));
console.log(calc.calculate(5, 23, divide));
console.log(calc.memory);

console.log(kalk.calculate(5.3, 10, multiply));
console.log(kalk.calculate(15, 23, subtract));
console.log(kalk.memory);

calc.showMemory();
kalk.resetMemory();
console.log(kalk.showMemory());

// Zadanie 3
function Game() {
  this.generateRandomNumber = () => {
    Game.prototype.interval = setInterval(() => {
      Game.prototype.number = Math.round(Math.random() * 10);
    }, 1000);
  };
  this.checkNumber = () => {
    Game.prototype.checkNumber = setInterval(() => {
      console.log(`Number: ${Game.prototype.number}`);
      if (Game.prototype.number <= 5) {
        return;
      } else {
        console.log('Number is greater than 5!');
        clearInterval(Game.prototype.generateRandomNumber);
        clearInterval(Game.prototype.checkNumber);
      }
    }, 1000);
  };
}

const Game1 = new Game();
const Game2 = new Game();

Game1.generateRandomNumber();
Game2.checkNumber();
