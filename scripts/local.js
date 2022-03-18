let form = document.querySelector("form");
let usuarios = document.getElementById("usuarios");

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
  let valor = parseFloat(peso / ((altura / 100) * (altura / 100)));
  usuarios.innerHTML = ` 
        <h1>
            ${name}, tiene una altura de: 
            ${altura} y un peso de: ${peso}. 
            Su IMC es: ${valor.toFixed(2)}
        </h1>
    `;
});
