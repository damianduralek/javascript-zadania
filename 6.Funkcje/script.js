// Zadanie 1
function xd() {
  console.log('Udało się!');
}
xd();

// Zadanie 2
function xd(x) {
  console.log('parametr: ' + x);
}
xd('xd');

// Zadanie 3
function xd(arr) {
  console.log(arr);
}
xd([1, 2, 3, 4]);

// Zadanie 4
function write(x) {
  let i = 1;
  let count = setInterval(function () {
    if (i <= 5) {
      console.log(x);
      i++;
    } else {
      clearInterval(count);
      console.log('Koniec');
    }
  }, 500);
}
write('string');
