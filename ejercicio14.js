function sumarArregloRango(arreglo, inicio, fin) {

  if (inicio === fin) {
    return 0;
  }

  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += arreglo[i];
  }

  return suma;
}

// código de prueba
console.log(sumarArregloRango([1, 2, 3], 1, 2));// 5
console.log(sumarArregloRango([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6));// 22

console.log(sumarArregloRango([7, 8, 9], 0, 0)); // 0