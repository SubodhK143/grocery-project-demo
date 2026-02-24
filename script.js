const products = [
    // Fruits
    {id:1,name:"Apple",price:120,category:"fruits",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=60"},
    {id:2,name:"Banana",price:60,category:"fruits",image:"https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=60"},
    {id:3,name:"Orange",price:90,category:"fruits",image:"https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?auto=format&fit=crop&w=500&q=60"},
    {id:4,name:"Mango",price:150,category:"fruits",image:"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=60"},
    {id:5,name:"Grapes",price:80,category:"fruits",image:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=60"},

    // Vegetables
    {id:6,name:"Potato",price:30,category:"vegetables",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=60"},
    {id:7,name:"Tomato",price:40,category:"vegetables",image:"https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=60"},
    {id:8,name:"Onion",price:35,category:"vegetables",image:"https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=60"},
    {id:9,name:"Carrot",price:50,category:"vegetables",image:"https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=500&q=60"},
    {id:10,name:"Cabbage",price:45,category:"vegetables",image:"https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&w=500&q=60"},

    // Dairy
    {id:11,name:"Milk",price:50,category:"dairy",image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=60"},
    {id:12,name:"Eggs",price:70,category:"dairy",image:"https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=500&q=60"},
    {id:13,name:"Butter",price:120,category:"dairy",image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=500&q=60"},
    {id:14,name:"Cheese",price:200,category:"dairy",image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=60"},

    // Staples
    {id:15,name:"Rice",price:80,category:"staples",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=60"},
    {id:16,name:"Wheat Flour",price:60,category:"staples",image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=60"},
    {id:17,name:"Cooking Oil",price:150,category:"staples",image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=60"},
    {id:18,name:"Sugar",price:45,category:"staples",image:"https://images.unsplash.com/photo-1581447109200-bf2769116351?auto=format&fit=crop&w=500&q=60"},
    {id:19,name:"Salt",price:20,category:"staples",image:"https://images.unsplash.com/photo-1518110925495-5f7c6e3cbb3b?auto=format&fit=crop&w=500&q=60"},

    // Snacks
    {id:20,name:"Biscuits",price:30,category:"snacks",image:"https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=500&q=60"},
    {id:21,name:"Chips",price:20,category:"snacks",image:"https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=500&q=60"},
    {id:22,name:"Chocolate",price:50,category:"snacks",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=60"},
    {id:23,name:"Namkeen",price:40,category:"snacks",image:"https://images.unsplash.com/photo-1604908177522-432c7d4d1c7d?auto=format&fit=crop&w=500&q=60"},

    // Beverages
    {id:24,name:"Tea",price:120,category:"beverages",image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=60"},
    {id:25,name:"Coffee",price:180,category:"beverages",image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60"},
    {id:26,name:"Fruit Juice",price:90,category:"beverages",image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=60"},
    {id:27,name:"Soft Drink",price:40,category:"beverages",image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=500&q=60"},

    // Personal Care
    {id:28,name:"Soap",price:35,category:"personal",image:"https://images.unsplash.com/photo-1607006344380-b6775a0824c7?auto=format&fit=crop&w=500&q=60"},
    {id:29,name:"Shampoo",price:120,category:"personal",image:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=500&q=60"},
    {id:30,name:"Toothpaste",price:90,category:"personal",image:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=60"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("product-container");
const recommendBox = document.getElementById("recommend-container");
const cartCount = document.getElementById("cart-count");

if(cartCount) cartCount.textContent = cart.length;

function displayProducts(list){
    container.innerHTML = "";
    list.forEach(p=>{
        container.innerHTML += `
        <div class="card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    });
}

function addToCart(id){
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    if(cartCount) cartCount.textContent = cart.length;

    // Automatically show recommendation
    showRecommendations(product.category, id);
}

function recommend(id){
    const selected = products.find(p=>p.id===id);
    const similar = products.filter(p=>p.category===selected.category && p.id!==id);

    recommendBox.innerHTML="";
    similar.forEach(p=>{
        recommendBox.innerHTML += `
        <div class="card">
            <img src="${p.image}">
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>
        </div>`;
    });
}

function filterCategory(cat){
    if(cat==="all") displayProducts(products);
    else displayProducts(products.filter(p=>p.category===cat));
}

document.getElementById("search").addEventListener("input",function(){
    const val = this.value.toLowerCase();
    displayProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
});

displayProducts(products);


