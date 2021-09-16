const tienda = [{
        id: 1001,
        tipo: "joggin",
        nombre: "jet",
        precio: 5500,
        disponible: false,
        stock: 12
    },
    {
        id: 1002,
        tipo: "joggin",
        nombre: "sky",
        precio: 4900,
        disponible: true,
        stock: 12
    },
    {
        id: 1003,
        tipo: "joggin",
        nombre: "phoenix",
        precio: 5200,
        disponible: true,
        stock: 7
    },
    {
        id: 4001,
        tipo: "remera",
        nombre: "miami",
        precio: 1200,
        disponible: true,
        stock: 0
    },
    {
        id: 4002,
        tipo: "remera",
        nombre: "denver",
        precio: 1280,
        disponible: true,
        stock: 2
    },
    {
        id: 4003,
        tipo: "remera",
        nombre: "california",
        precio: 1500,
        disponible: false,
        stock: 15
    },
    {
        id: 3001,
        tipo: "buzo",
        nombre: "milano",
        precio: 8300,
        disponible: false,
        stock: 12
    },
    {
        id: 3002,
        tipo: "buzo",
        nombre: "torino",
        precio: 8000,
        disponible: false,
        stock: 16
    },
    {
        id: 3003,
        tipo: "buzo",
        nombre: "conflenti",
        precio: 7200,
        disponible: true,
        stock: 19
    },
];

class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.tipo = producto.tipo;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.disponible = producto.disponible;
        this.stock = producto.stock
    }
}

const carrito = []

const comprar = (nombreProducto) => {

    let producto = tienda.find(producto => producto.nombre == nombreProducto)
    if (producto) {
        if (producto.stock > 0) {
            carrito.push(producto)
            if (producto.stock <= 3 && producto.stock > 0) {
                console.log(`Cuidado te quedan pocxs ${producto.tipo}s ${producto.nombre}`)
            }
            alert(`Usted compro ${producto.tipo} ${producto.nombre}`);
            console.log(`se vendio un ${producto.tipo}s ${producto.nombre}, quedan en stock ${producto.stock}`);
            producto.stock = producto.stock - 1;
        } else {
            producto.disponible = false;
            let error = `No quedan mas ${producto.tipo}s ${producto.nombre}`;
            alert(error)
            console.log(`no se realizo una compra de ${producto.tipo} ${producto.nombre} por falta de stock, renovar stock`)
        }
    } else {
        console.log("No contamos con ese producto")
    }
}

const publicidad = (disponibilidadProducto) => {
    let producto = tienda.find(producto => producto.nombre == disponibilidadProducto)
    if (producto.disponible == true) {
        let resultado = `Tenes un descuento en la compra de ${producto.tipo} ${producto.nombre}, salia ${producto.precio} y ahora sale ${producto.precio*0.75}`
        alert(resultado);
    } else {
        let error = `Lo sentimos, no hay descuento para ${producto.tipo} ${producto.nombre}`
        alert(error);
    }
}

let compraJet = prompt(`desea comprar joggin jet?`)
if (compraJet == "si") {
    comprar("jet")
    /* publicidad("jet") */
}

let compraSky = prompt(`desea comprar joggin sky?`)
if (compraSky == "si") {
    comprar("sky")
    /* publicidad("sky") */
}

let compraPhoenix = prompt(`desea comprar joggin phoenix?`)
if (compraPhoenix == "si") {
    comprar("phoenix")
    /* publicidad("phoenix") */
}

let compraMiami = prompt(`desea comprar remera miami?`)
if (compraMiami == "si") {
    comprar("miami")
    /* publicidad("miami") */
}

let compraDenver = prompt(`desea comprar remera denver?`)
if (compraDenver == "si") {
    comprar("denver")
    /* publicidad("denver") */
}

let compraCalifornia = prompt(`desea comprar remera california?`)
if (compraCalifornia == "si") {
    comprar("california")
    /* publicidad("california") */
}

let compraMilano = prompt(`desea comprar buzo milano?`)
if (compraMilano == "si") {
    comprar("milano")
    /* publicidad("milano") */
}

let compraTorino = prompt(`desea comprar buzo torino?`)
if (compraTorino == "si") {
    comprar("torino")
    /* publicidad("torino") */
}

let compraConflenti = prompt(`desea comprar buzo conflenti?`)
if (compraConflenti == "si") {
    comprar("conflenti")
    /* publicidad("conflenti") */
}

console.log(carrito)