// Zadanie 1
let a = 1;
let b = 2;

if (a > b) {
  console.log(`a jest większe`);
} else {
  console.log(`b jest większe`);
}

// Zadanie 2
let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c) {
  console.log(`a jest najwieksza`);
} else if (b > a && b > c) {
  console.log(`b jest najwieksza`);
} else {
  console.log(`c jest najwieszka`);
}

// Zadanie 3
for (let i = 0; i < 10; i++) {
  console.log('Lubię JavaScript');
}

// Zadanie 4
let a = 0;
for (let i = 0; i < 10; i++) {
  a += i;
}
console.log(i);

// Zadanie 5
var a = 5;

for (let i = 0; i <= a; i++) {
  if (i % 2 == 0) {
    console.log(i + ' - parzysta');
  } else {
    console.log(i + ' - nieparzysta');
  }
}

// Zadanie 6
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log('i= ' + i + ', j= ' + j);
  }
}

// Zadanie 7
console.log(0);
for (i = 1; i < 100; i++) {
  if (i % 15 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Zadanie 8
// a)
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
//b)
let star = ' *';

for (let x = 0; x < 5; x++) {
  var result = '';
  for (y = 0; y < 5 - x; y++) {
    result += ' ';
  }
  for (z = 0; z < x + 1; z++) {
    result += star;
  }
  console.log(result);
}
//c)
let star = '*';

for (let x = 0; x < 5; x++) {
  let result = '';
  for (y = 0; y < 5 - x; y++) {
    result += ' ';
  }
  for (z = 0; z < x + 1; z++) {
    result += star;
  }
  for (v = 1; v < x + 1; v++) {
    result += '*';
  }
  console.log(result);
}

//d)
let star = '*';

for (let x = 0; x < 5; x++) {
  let result = '';
  for (y = 0; y < x + 1; y++) {
    result += star;
  }
  let count = x + 1;
  for (i = 1; i > x - 3; i--) {
    result += count++;
  }
  console.log(result);
}
console.log('-----');

//e)
let star = ' *';

for (let x = 0; x < 5; x++) {
  var result = '';
  for (y = 0; y < 5 - x; y++) {
    result += ' ';
  }
  for (z = 0; z < x + 1; z++) {
    result += star;
  }
  console.log(result);
}
for (v = 0; v < 3; v++) {
  console.log('     *');
}
