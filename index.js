const products = [
    {
        title: "Goalkeeper Gloves",
        price: "$29.99",
        image: "photos/Soccer Goalkeeper Gloves_ (Customized Bulk Quantity) (2).jpeg"
    },
    {
        title: "Sports T-shirt",
        price: "$49.99",
        image: "photos/8cf7ffcf-f6d3-4bc8-90da-d63c3a16804a.jpeg"
    },
    {
        title: "Running Shoes",
        price: "$39.99",
        image: "photos/1bae6cf9-cc07-49b1-907e-53ee568e5c9d.jpeg"
    },
    {
        title: "Baseball Cap",
        price: "$19.99",
        image: "photos/baseball cap.jpeg"
    },
    {
        title: "Volleyball",
        price: "$29.99",
        image: "photos/Volleyball Balls - Volleyballs.jpeg"
    },
    {
        title: "Jogging Pants",
        price: "$39.99",
        image: "photos/jogging pants.jpeg"
    },
    {
        title: "Football",
        price: "$34.99",
        image: "photos/football.jpg"
    },
    {
        title: "Tennis Kit",
        price: "$89.99",
        image: "photos/Tennis Gear and Accessories Guide.jpeg"
    },
    {
        title: "Kickboxing Gloves",
        price: "$14.99",
        image: "photos/Kickboxen Handpratzen.jpeg"
    },
    {
        title: "Boxing Gloves",
        price: "$49.99",
        image: "photos/Venum Elite Boxing Gloves Khaki_Black - 12oz.jpeg"
    },
    {
        title: "Football Shoes",
        price: "$59.99",
        image: "photos/football shoes.jpeg"
    }
];

let cart = [];

function displayProducts() {
    const container = document.getElementById('product-container');
    
    container.innerHTML = '';
    
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'col-md-6 mb-4'; 
        card.innerHTML = `
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.title}</h5>
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart('${product.title}', '${product.price}')">Add to Cart</button>
                    <button class="btn btn-danger mt-2" onclick="deleteItem(this)">Delete</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function addToCart(title, price) {
    cart.push({ title, price });
    alert(`${title} has been added to your cart.`);
}

window.onload = displayProducts;

function deleteItem(button) {
    const card = button.closest('.card');
    card.remove();
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartItems = cart.map(item => `${item.title}: ${item.price}`).join('\n');
        alert(`Your cart:\n${cartItems}`);
    }
}
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('product-title').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;


    if (title && price && image) {
        products.push({ title, price, image });

        this.reset();

        displayProducts();
    } else {
        alert("Please fill in all fields.");
    }
});


window.onload = displayProducts;