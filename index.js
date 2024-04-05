const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.querySelector("form");
const input = document.querySelector("input");
const conteiner = document.querySelector(".conteiner")

form.addEventListener("submit",(e) => {
  
  e.preventDefault()

  const searchPizza = pizzas.find(
    (p) => p.id === parseInt(input.value)
  )

  const pizzaGuardada = searchPizza

  if(pizzaGuardada) {

    conteiner.innerHTML = `
      <div class="card">
      <h3> Proba nuestra ${pizzaGuardada.nombre} por tan solo $ ${pizzaGuardada.precio}</h3>
      <img src="${pizzaGuardada.imagen}" />
      </div>
    `
    localStorage.setItem("pizza", JSON.stringify(pizzaGuardada));
  }

  else {

    conteiner.innerHTML = `
      <h3 class="error"> La pizza que estas buscando no se encuentra disponible</h3>
    `
    }
    
})

const pizzaEncontrada = JSON.parse(localStorage.getItem("pizza"));

if(pizzaEncontrada) {
  conteiner.innerHTML = `
    <div class="card">
    <h3> Proba nuestra ${pizzaEncontrada.nombre} por tan solo $${pizzaEncontrada.precio}</h3>
    <img src="${pizzaEncontrada.imagen}" />
    </div>
  `
}
