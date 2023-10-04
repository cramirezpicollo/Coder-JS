let producto = prompt("Ingrese producto")


if (producto !== "cerveza") {
    alert("No disponemos de ese producto");
}
else {
    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));
    for (let i = 500; i <= 5000; i = i + 500) {
        let precioFinal = cantidad * i * 0.8;

        alert("Este es el precio final:" + " " + precioFinal);
        break;
    }

}





