// Zadanie 1
function Person(firstName, lastName, age, country, city) {
  this.personFirstName = firstName;
  this.personLastName = lastName;
  this.personAge = age;
  this.personCountry = country;
  this.personCity = city;
  this.favouriteFood = [];

  this.showData = function () {
    console.log(
      `Name: ${this.personFirstName} ${this.personLastName}, 
      Age: ${this.personAge}, 
      Country: ${this.personCountry}, 
      City: ${this.personCity}`
    );
  };

  this.addYear = function () {
    ++this.personAge;
  };
}

const person1 = new Person('Marek', 'Markowski', 21, 'Polska', 'Kraków');
const person2 = new Person('Jan', 'Janowski', 34, 'Anglia', 'London');

person1.showData();
person1.addYear();
console.log('rok więcej: ' + person1.personAge);

person2.showData();
person2.addYear();
person2.addYear();
person1.showData();
console.log(
  'Pierwsza osoba ma teraz ' +
    person1.personAge +
    ' lat i druga osoba ma ' +
    person2.personAge +
    ' lat'
);

// Zadanie 2
Person.prototype.addFood = function (food) {
  this.favouriteFood.push(food);
};
Person.prototype.yourFood = function () {
  console.log(this.favouriteFood);
};

person1.addFood('Pancakes');
person1.addFood('Coca Cola');
person1.addFood('Blueberries');
person1.yourFood();

person2.addFood('Pizza');
person2.addFood('French fries');
person2.addFood('Water');
person2.yourFood();

// Zadanie 3
const calculator = {
  input: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    console.log(this.a + this.b);
  },
  subtract: function () {
    console.log(this.a - this.b);
  },
  multiply: function () {
    console.log(this.a * this.b);
  },
  divide: function () {
    this.b === 0
      ? console.log("Nie dziel przez 0!")
      : console.log(this.a / this.b);
  },
};

calculator.input(69, 420);
calculator.sum();
calculator.subtract();
calculator.multiply();
calculator.divide();
