function min(arr) {
  if (arr.length === 0) return undefined;

  let menor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }

  return menor;
}

// código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2
