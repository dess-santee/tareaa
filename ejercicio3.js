function bmi(peso, altura){
    const imc = peso / (altura* altura);
    if  (imc < 18.5) return "bajo de peso";
    if  (imc < 24.9) return "Normal";
    if  (imc < 29.9) return "Sobrepeso";
    return "Obeso";

}
// código de prueba
console.log(bmi(65, 1.8));// "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"