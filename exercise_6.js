const arr = [1, 2, 3, 2, 1, 4, 5, 4];
let equals = false;
for (let i = 0; i < arr.length; i++ ) {
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] === arr[k]) {
      equals = true;
      console.log(`element[${i}] = element[${k}] (${arr[i]})`);
    }
  }
}
console.log(equals);