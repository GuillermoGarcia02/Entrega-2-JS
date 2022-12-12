const pizzas = [
    {
        id: 1,
        nombre: "grandeMuzza",
        ingredientes: ["muzza", "brocoli"],
        precio: 123,
    },
    {
        id: 2,
        nombre: "grandeAlbaca",
        ingredientes: ["albaca", "pepinos"] ,
        precio: 456 ,
    },
    {
        id: 3,
        nombre: "grandePalmitos",
        ingredientes: ["palmitos", "salsa"],
        precio: 789,
    },
    {
        id: 4,
        nombre: "grandeHuevo",
        ingredientes:["huevo", "tomate"],
        precio: 321,
    },
    {
        id: 5,
        nombre: "grandeMorron",
        ingredientes: ["morron", "zapallo"],
        precio: 654,
    },
    {
        id: 6,
        nombre: "grandeJamon",
        ingredientes: ["jamon", "zanahoria"],
        precio: 987,
    }
];

const form = document.querySelector("form");
const input = document.querySelector("input");
const caja = document.querySelector("caja");

let pizza = JSON.parse(localStorage.getItem("pizzas")) || [];

const saveLocal = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
};

const renderPizza = (pizza) => `<p>${pizza}</p>`;


const renderItems = (pizzas) => {
    caja.innerHTML = pizzas.map(renderItem).join("");
}

const init = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let pizza = input.value.trim();
        input.value = "";
        pizza = [pizzas];
        saveLocal(pizza);
        renderItems(pizza);
    });
    renderItems(items);
};

