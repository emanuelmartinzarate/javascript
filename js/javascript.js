function send(){
    const coments = document.getElementById("coments").value;
    const data = Array.from(document.querySelectorAll('#formContact input')).map((input) =>{
        return `${input.id} : ${input.value}`;
    });

    if(data.length > 0 && coments!="")
        alert(`data: ${data} Comentarios: ${coments}`);
}

let products = []
let productsInCart = []

function addToCart(productId){
    const product = products.find( product => product.id === productId );
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))

    Toastify({
        text: "Se agrego el producto al carrito!",
        duration: 3000,
        gravity: 'top',
        position: 'right'
    }).showToast();
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

    listProducts(){
        let listProd = document.getElementById("showProducts");
        for(const product of products){
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


async function init(){
    const ecommerce = new Ecommerce();

    await fetch('./data/products.json')
    .then((response) => response.json())
    .then((data)=>  {
                        products = [...data]
                    })
    .catch((error)=> console.log(error))

    ecommerce.listProducts()
}
