function enviar(){
    // Simulo la toma de info desde la pagina, luego sera reemplazado por el uso del DOM
    let name = "Emanuel Martin";
    let lastName =  "Zarate";
    let email = "emanuelmartin@gmail.com"
    let cellphone = "11523456789"
    let coments = "comentarios ingresados"

    console.log(`name: ${name} Apellido: ${lastName} Email: ${email} Celular:${cellphone} Comentarios:${coments}`);
}


const products = [];

class Ecommerce{

    constructor(products){
        this.products=products;
    }
    createProduct(id,name,price) {
        let product = new Product(id,name,price);
        return product;
    }
    addProduct(product){
        this.products.push(product);
    }
    listProducts(){
        console.log("Lista de productos")
        for(const product of this.products)
            console.log(`Nombre del producto: ${product.name}`);
    }

}


class Product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}

const ecommerce = new Ecommerce(products);
let product1 = ecommerce.createProduct("1","product1","1000");
let product2 = ecommerce.createProduct("2","product2","2000");
let product3 = ecommerce.createProduct("2","product3","2000");
let product4 = ecommerce.createProduct("2","product4","2000");

let buy = true;

while(buy){
    let productSelected = prompt(`Seleccione producto  a agregar al carrito de compra
                                 1 - product1
                                 2 - product2
                                 3 - product3
                                 4 - product4
                                 5 - Listar productos agregados al carrito
                                 6 - Fin`)
    if(productSelected === "1"){
        ecommerce.addProduct(product1); 
    }else if(productSelected === "2"){
        ecommerce.addProduct(product2); 
    }else if(productSelected === "3"){
        ecommerce.addProduct(product3);
    }else if(productSelected === "4"){
        ecommerce.addProduct(product4);
    }else if(productSelected === "5"){
        ecommerce.listProducts();
    }else if(productSelected === "6"){
        buy = false;
    }else{
        alert("Error: Por favor seleccione una de las opciones que se muestran en el menu");
    }

}
