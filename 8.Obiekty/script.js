// Zadanie 1
const car = {
  name: 'Mazda',
  age: 10,
  id: '2h34j5!',
  changeName: function (n) {
    this.name = n;
  },
  animal: {
    name: 'dog',
    legs: 4,
    friend: true,
  },
};
console.log(car.name, car.age, car.id);

// Zadanie 2
car.changeName('Porsche');
console.log(car);

// Zadanie 3
const obj = {
  sum: '',
  sumMethod: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      this.sum = arr[i] + arr[i];
    }
    this.arr = this.sum;
    console.log(this.sum);
  },
};
obj.sumMethod([1, 2, 3]);

// Zadanie 4
const car = {
  name: 'BMW',
  age: 12,
  id: '2h34j5!',
};

for (let property in car) console.log(`${property}: ${car[property]}`);

// Zadanie 5
console.log(car.animal);

// Zadanie 6
car.doors = 5;
car.hello = () => console.log('Hello');

car.hello();
