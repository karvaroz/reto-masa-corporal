const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");
  let valorIMC = peso / ((altura / 100) * (altura / 100));

  let clasificado = 0;

  console.log(altura, peso), clasificado;
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
  resultado.textContent = `${nombre} tu IMC es ${valorIMC}, usted esta: ${clasificado}`;
});
