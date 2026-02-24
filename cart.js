
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart-items");
const totalBox = document.getElementById("total");

function displayCart() {
    container.innerHTML = "";
    let total = 0;

    if(cart.length === 0){
        container.innerHTML = "<h2 style='text-align:center;'>Your cart is empty</h2>";
        totalBox.textContent = "";
        return;
    }

    cart.forEach((item,index)=>{
        total += item.price;

        container.innerHTML += `
            <div class="card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalBox.textContent = "Total Amount: ₹" + total;
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}

// Go to payment page
function checkout(){
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    window.location.href = "payment.html";
}

displayCart();
