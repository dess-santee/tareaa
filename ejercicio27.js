function numerosAPalabras(arr) {
  const palabras = [
    "cero", "uno", "dos", "tres", "cuatro",
    "cinco", "seis", "siete", "ocho", "nueve"
  ];

  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    resultado.push(palabras[arr[i]]);
  }

  return resultado;
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4]));
console.log(numerosAPalabras([5, 6, 7, 8, 9]));
