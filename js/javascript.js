function send(){
    const coments = document.getElementById("coments").value;
    const data = Array.from(document.querySelectorAll('#formContact input')).map((input) =>{
        return `${input.id} : ${input.value}`;
    });

    alert(`data: ${data} Comentarios: ${coments}`);
}


const products = [
    {id:1,title:'product1',description:'description product 1',price:1000,pictureUrl:'picture1',category:'A',stock:'20'},
    {id:2,title:'product2',description:'description product 2',price:1000,pictureUrl:'picture2',category:'A',stock:'20'},
    {id:3,title:'product3',description:'description product 3',price:1000,pictureUrl:'picture3',category:'A',stock:'20'},
    {id:4,title:'product4',description:'description product 4',price:1000,pictureUrl:'picture4',category:'A',stock:'20'}
]

let productsInCart = []

function addToCart(productId){
    const product = products.find( product => product.id === productId );
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
}

function showProductsInCart(productsIncart){
    let listProd = document.getElementById("listCart");
            for(const product of productsInCart){
                const {id, title, price} = product
                let contenedor = document.createElement("div");
                contenedor.className = "column"    
                contenedor.innerHTML = `<div class="card">
                                        <h3> Id: ${id} </h3>
                                        <p> Producto: ${title}</p>
                                        <b> $ ${price} </b><br>
                                        </div>`;
                listProd.appendChild(contenedor);
            }
}

function showEmptyCart(){
    let listProd = document.getElementById("listCart");
    let contenedor = document.createElement("div");
    contenedor.className = "column"
    contenedor.innerHTML = `<span>Carrito vacio</span>`
    listProd.appendChild(contenedor);
}

function showCart(){
    productsInCart = JSON.parse(localStorage.getItem("cart"))
    productsInCart ? showProductsInCart(productsInCart) : showEmptyCart()
}

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
        let listProd = document.getElementById("showProducts");
        for(const product of this.products){
            const {id,title,price} = product
            let contenedor = document.createElement("div");
            contenedor.className = "column"    
            contenedor.innerHTML = `<div class="card">
                                    <h3> Id: ${id} </h3>
                                    <p> Producto: ${title}</p>
                                    <b> $ ${price} </b><br>
                                    <button onclick="addToCart(${id})">Agregar al carrito</button>
                                    </div>`;
            listProd.appendChild(contenedor);
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

function init(){
    ecommerce.listProducts()
}
