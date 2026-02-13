function palabrasANumeros(arr) {
  const mapa = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9
  };

  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (mapa.hasOwnProperty(arr[i])) {
      resultado.push(mapa[arr[i]]);
    } else {
      resultado.push(-1);
    }
  }

  return resultado;
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"]));
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"]));
