const productos = [
    {id: 1, nombre: 'Blunt, Blueberry', precio: 2000},
    {id: 2, nombre: 'Bong, Plastico duro', precio: 10000},
    {id: 3, nombre: 'Bong, Vidrio forjado', precio: 40000},
    {id: 4, nombre: 'Vape CBD, Garden Growshop', precio: 120000}
]

const bienvenida = () => {
    let confirmacionEdad = confirm('Este es un sitio para mayores de 18 años. Acepte solo si usted es mayor de edad.');
    if (confirmacionEdad) {
        nombre = prompt(' ¿Cuál es tu nombre? :');
        if (nombre) {
            alert(`Hola ${nombre}. Bienvenido a Garden Growshop.`);
        } else {
            alert('Hola sin nombre, Bienvenido a Garden Growshop! ');
        }
    } else {
        alert('Lo sentimos, este sitio es para mayores de 18 años.');
    }
}

let carrito = []
let nombre = '';

const agregarCarrito = (cantidad) => {
    carrito.push({ ...productos[menuProductos - 1], cantidad });
    alert(`${cantidad} producto(s) agregado(s) al carrito.`);
    listaProductos();
}

const listaCarrito = () => {
    let totalPagar = 0;
    let mensaje = 'Carrito de compras:\n';
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}) ${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}\n`;
        totalPagar += producto.precio * producto.cantidad;
    });
    mensaje += `Total a pagar: $${totalPagar}\n`;
    const opcionesCarrito = prompt(`${mensaje}\nSELECCIONE UNA OPCION:\n1) Confirmar compra\n2) Eliminar carrito\n3) Volver`);
    if (opcionesCarrito == 1){
        confirmarCompra(totalPagar);
    } else if (opcionesCarrito == 2){
        eliminarCarrito();
    } else if (opcionesCarrito == 3){
        listaProductos();
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.');
        listaCarrito();
    }
}

const confirmarCompra = (total) =>{
    const confirmarPago = confirm(`Desea confirmar la compra por un total de $${total}`);
    if (confirmarPago) {
        alert('Gracias por su compra.');
        carrito = [];
        listaProductos();
    } else {
        listaCarrito();
    }
}

const eliminarCarrito = () => {
    const confirmarEliminar = confirm('¿Está seguro que desea eliminar el carrito?');
    if (confirmarEliminar) {
        carrito = [];
        alert('Carrito eliminado.');
        listaProductos();
    } else {
        listaCarrito();
    }
}

const listaProductos = () =>{
    console.table(productos);
    menuProductos = prompt('LISTA DE PRODUCTOS:\n\n1 - Blunt, Blueberry - $2000\n2 - Bong, Plastico duro - $10000\n3 - Bong, Vidrio forjado - $40000\n4 - Vape CBD, Garden Growshop - $120000\n\nSELECCIONE UN PRODUCTO CON EL RESPECTIVO NÚMERO\n\nC - Ver Carrito\nV - Salir');
    console.log(menuProductos);
    if (menuProductos == 1 || menuProductos == 2 || menuProductos == 3 || menuProductos == 4) {
        productoSeleccionado = menuProductos;
        let cantidadProducto = parseInt(prompt('¿Cuántos desea agregar al carrito?'));
        if (cantidadProducto > 0) {
            agregarCarrito(cantidadProducto);
        } else {
            alert('La cantidad debe ser mayor a 0.');
            listaProductos();
        }
    } else if (menuProductos.toLowerCase() == 'c') {
        listaCarrito();
    } else if (menuProductos.toLowerCase() == 'v') {
        alert('Hasta pronto.');
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.');
        listaProductos();
    }
}

bienvenida();

listaProductos();