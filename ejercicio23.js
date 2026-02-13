function duplicar(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    resultado.push(arr[i] * 2);
  }

  return resultado;
}

// código de prueba
console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []
