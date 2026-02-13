function capitalizar(str) {
  if (str.length === 0) return "";

  let palabras = str.split(" ");
  let resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 0) {
      resultado.push(
        palabras[i][0].toUpperCase() + palabras[i].slice(1)
      );
    }
  }

  return resultado.join(" ");
}

// código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""
