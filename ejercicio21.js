function pares(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []
