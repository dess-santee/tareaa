function empiezanConA(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] && arr[i][0].toLowerCase() === "a") {
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); 
// ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []
