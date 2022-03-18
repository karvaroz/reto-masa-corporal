let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  let name = document.getElementById("nombre").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;

  e.preventDefault();

  localStorage.setItem("nombreUsuario", name);
  localStorage.setItem("alturaUsuario", altura);
  localStorage.setItem("pesoUsuario", peso);

  form.reset();
});

document.addEventListener("submit", () => {
  let name = localStorage.getItem("nombreUsuario");
  let altura = localStorage.getItem("alturaUsuario");
  let peso = localStorage.getItem("pesoUsuario");
  let valorIMC = parseFloat(peso / ((altura / 100) * (altura / 100)));
  let resultado = document.getElementById("resultado");

  if (valorIMC < 18.5) {
    clasificado = "Por debajo del peso";
  } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
    clasificado = "Saludable";
  } else if (valorIMC >= 25 && valorIMC <= 29.9) {
    clasificado = "Con sobrepeso";
  } else if (valorIMC >= 30 && valorIMC <= 39.9) {
    clasificado = "Obeso";
  } else if (valorIMC > 40) {
    clasificado = "Obesidad extrema o de alto riesgo";
  }
  resultado.textContent = `${name} tu IMC es ${valorIMC.toFixed(
    2
  )}, usted esta: ${clasificado}`;
});
