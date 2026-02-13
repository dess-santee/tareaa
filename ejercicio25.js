function terminanConS(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i];
    if (
      palabra.length > 0 &&
      palabra[palabra.length - 1].toLowerCase() === "s"
    ) {
      resultado.push(palabra);
    }
  }

  return resultado;
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));
// ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []
