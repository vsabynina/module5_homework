const x = +prompt("Введите значение");
const xType = typeof x;
if (xType !== "number" || isNaN(x)) {
  alert ("Упс, кажется, вы ошиблись");
}
const y = x%2;
switch (y) {
  case 0 :
  console.log ("Это чётное число");
  break;
  case 1:
  console.log ("Это нечётное число");
  break;
}
