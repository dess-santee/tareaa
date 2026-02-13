function distancia(str1, str2) {
  let contador = 0;
  let maxLongitud = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLongitud; i++) {
    if (str1[i] !== str2[i]) {
      contador++;
    }
  }

  return contador;
}

// código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3
