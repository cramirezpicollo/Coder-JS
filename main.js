const productos = [
    { id: 1, nombre: "cerveza", precio: 500 },
    { id: 2, nombre: "ron", precio: 600 },
    { id: 3, nombre: "fernet", precio: 1100 },
    { id: 4, nombre: "vino", precio: 800 },
    { id: 5, nombre: "gin", precio: 1000 },
];

function opDescuento(operacion) {
    if (operacion == "precioDescuento") {
        return (a, b) => a * b;
    }
}
let descuento = opDescuento("precioDescuento")

let mensaje = prompt("Ingrese producto")

let bebida = productos.filter (item => item.nombre === mensaje);

bebida.forEach((item) => {
    let infoProductos =
            `Id: ${item.id}
            Nombre: ${item.nombre}
            Precio: $${item.precio}`;

    alert(infoProductos);

    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));

    alert("Este es el precio final:" + " " + descuento(cantidad, item.precio) * 0.8);

})