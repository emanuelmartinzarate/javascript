function enviar(){
    const coments = document.getElementById("coments").value;
    const data = Array.from(document.querySelectorAll('#formContact input')).map((input) =>{
        return `${input.id} : ${input.value}`;
    });

    alert(`data: ${data} Comentarios: ${coments}`);
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
        let listCart = document.getElementById("listCart");
        for(const product of this.products){
            let contenedor = document.createElement("div");
            contenedor.className = "column"    
            contenedor.innerHTML = `<div class="card">
                                    <h3> Id: ${product.id} </h3>
                                    <p> Producto: ${product.name}</p>
                                    <b> $ ${product.price} </b></div>`;
            listCart.appendChild(contenedor);
        }
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
ecommerce.addProduct(product1);
let product2 = ecommerce.createProduct("2","product2","2000");
ecommerce.addProduct(product2);
let product3 = ecommerce.createProduct("3","product3","2000");
ecommerce.addProduct(product3);
let product4 = ecommerce.createProduct("4","product4","2000");
ecommerce.addProduct(product4);

ecommerce.listProducts()