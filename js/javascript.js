function enviar(){
    // Simulo la toma de info desde la pagina, luego sera reemplazado por el uso del DOM
    let nombre = "Emanuel Martin";
    let apellido =  "Zarate";
    let email = "emanuelmartin@gmail.com"
    let celular = "11523456789"
    let comentario = "comentarios ingresados"

    console.log(`Nombre: ${nombre} Apellido: ${apellido} Email: ${email} Celular:${celular} Comentario:${comentario}`);
}

function carrito(){
    // Simulo que tengo el carrito con productos e itero para calcular el total
    // Supongo que tengo 10 productos, esto luego debera ser reemplazado por un array de productos
    let cantidadProd = 10;
    // Simulo el precio del producto, esto luego debera ser reemplazado por un objeto
    let precioProd = 100;
    // inicializo el total en cero, luego en la medida que se vayan agregando producto se podria calcular el total al momento de agregar el producto con otra funcion
    
    let total = 0;

    for(let i=0;i<cantidadProd;i++){
        if(cantidadProd){
            total= calcularTotal(total,precioProd); 
        }
    }

    console.log(`Total del carrito: $${total}`);

}

function calcularTotal(total, precioProd){
    return total + precioProd;
}
