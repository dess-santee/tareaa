function password(str) {
  return str
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("a", "4")
    .replaceAll("e", "3")
    .replaceAll("i", "1")
    .replaceAll("o", "0");
}

// código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""
