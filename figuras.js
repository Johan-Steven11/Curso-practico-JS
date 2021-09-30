//Codigo Cuadrado
console.group("Cuadrado");

function areaCuadrado(lado) {
  return lado * lado;
}
function perimetroC(lado) {
  return lado * 4;
}
console.groupEnd();

//Codigo Trinagulo
console.group("Triangulos");
function perimetroT(lado1, lado2, Base) {
  return lado1 + lado2 + Base;
}
function Area(Base, Altura) {
  return (Base * Altura) / 2;
}
console.groupEnd();
//Codigo circulos
console.group("Circulos");
const PI = Math.PI;
function perimetroO(radio) {
  const diametro = DiametroO(radio);
  return diametro * PI;
}

function AreaO(radio) {
  return radio * radio * PI;
}

function DiametroO(radio) {
  return radio * 2;
}

//Aqui intercatuamos con el HTML

function PerimetroCu() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroC(value);
  alert("El Perimetro de este Cuadrado es: " + perimetro + "cm");
}
function AreaCua() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const Area = areaCuadrado(value);
alert ("El Perimetro de este Cuadrado es: " + Area + "cm");
}
