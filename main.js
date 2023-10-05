function Producto(bebida, valor) {
    this.bebida = bebida;
    this.valor = valor;
}

const producto1 = new Producto("cerveza", 500);
const producto2 = new Producto("ron", 600);
const producto3 = new Producto("fernet", 1100);
const producto4 = new Producto("vino", 800);
const producto5 = new Producto("gin", 1000);

let producto = prompt("Ingrese producto")


while ((producto !== producto1.bebida) && (producto !== producto2.bebida) && (producto !== producto3.bebida) && (producto !== producto4.bebida) && (producto !== producto5.bebida)) {

    alert("No disponemos de ese producto");
    producto = prompt("Ingrese producto");
}


if (producto === producto1.bebida) {
    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));
    for (let i = producto1.valor; i <= 10000; i = i + producto1.valor) {
        let precioFinal = cantidad * i * 0.8;

        alert("Este es el precio final:" + " " + precioFinal);
        break;
    }

}

if (producto === producto2.bebida) {
    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));
    for (let i = producto2.valor; i <= 10000; i = i + producto2.valor) {
        let precioFinal = cantidad * i * 0.8;

        alert("Este es el precio final:" + " " + precioFinal);
        break;
    }

}
if (producto === producto3.bebida) {
    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));
    for (let i = producto3.valor; i <= 10000; i = i + producto3.valor) {
        let precioFinal = cantidad * i * 0.8;

        alert("Este es el precio final:" + " " + precioFinal);
        break;
    }

}
if (producto === producto4.bebida) {
    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));
    for (let i = producto4.valor; i <= 10000; i = i + producto4.valor) {
        let precioFinal = cantidad * i * 0.8;

        alert("Este es el precio final:" + " " + precioFinal);
        break;
    }

}
if (producto === producto5.bebida) {
    let cantidad = parseInt(prompt("Tienes un descuento del 20% en tu primera compra. Ingresa la cantidad"));
    for (let i = producto5.valor; i <= 10000; i = i + producto5.valor) {
        let precioFinal = cantidad * i * 0.8;

        alert("Este es el precio final:" + " " + precioFinal);
        break;
    }

}
