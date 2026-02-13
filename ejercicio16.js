function capitalizar(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""
