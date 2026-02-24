const products = [
    {id:1,name:"Apple",price:120,category:"fruits",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"},
    {id:2,name:"Banana",price:60,category:"fruits",image:"https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?w=500"},
    {id:3,name:"Orange",price:90,category:"fruits",image:"https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500"},
    {id:4,name:"Mango",price:150,category:"fruits",image:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=500"},
    {id:5,name:"Grapes",price:80,category:"fruits",image:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500"},

    {id:6,name:"Potato",price:30,category:"vegetables",image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"},
    {id:7,name:"Tomato",price:40,category:"vegetables",image:"https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500"},
    {id:8,name:"Onion",price:35,category:"vegetables",image:"https://images.unsplash.com/photo-1508747703725-719777637510?w=500"},
    {id:9,name:"Carrot",price:50,category:"vegetables",image:"https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500"},
    {id:10,name:"Cabbage",price:45,category:"vegetables",image:"https://images.unsplash.com/photo-1592928302495-88d6d4f7f99f?w=500"},

    {id:11,name:"Milk",price:50,category:"dairy",image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"},
    {id:12,name:"Eggs",price:70,category:"dairy",image:"https://images.unsplash.com/photo-1604908554161-6c8b7c5d2e6c?w=500"},
    {id:13,name:"Butter",price:120,category:"dairy",image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500"},
    {id:14,name:"Cheese",price:200,category:"dairy",image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500"},

    {id:15,name:"Rice",price:80,category:"staples",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"},
    {id:16,name:"Wheat Flour",price:60,category:"staples",image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500"},
    {id:17,name:"Cooking Oil",price:150,category:"staples",image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500"},
    {id:18,name:"Sugar",price:45,category:"staples",image:"https://images.unsplash.com/photo-1581447109200-bf2769116351?w=500"},
    {id:19,name:"Salt",price:20,category:"staples",image:"https://images.unsplash.com/photo-1604908176997-431f9b4c0e4c?w=500"},

    {id:20,name:"Biscuits",price:30,category:"snacks",image:"https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500"},
    {id:21,name:"Chips",price:20,category:"snacks",image:"https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500"},
    {id:22,name:"Chocolate",price:50,category:"snacks",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"},
    {id:23,name:"Namkeen",price:40,category:"snacks",image:"https://images.unsplash.com/photo-1604908177522-040e7e0a88c5?w=500"},

    {id:24,name:"Tea",price:120,category:"beverages",image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500"},
    {id:25,name:"Coffee",price:180,category:"beverages",image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"},
    {id:26,name:"Fruit Juice",price:90,category:"beverages",image:"https://images.unsplash.com/photo-1600271886742-f049cd5bba6f?w=500"},
    {id:27,name:"Soft Drink",price:40,category:"beverages",image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500"},

    {id:28,name:"Soap",price:35,category:"personal",image:"https://images.unsplash.com/photo-1588776814546-ec7e7c9e8e6b?w=500"},
    {id:29,name:"Shampoo",price:120,category:"personal",image:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500"},
    {id:30,name:"Toothpaste",price:90,category:"personal",image:"https://images.unsplash.com/photo-1588776814546-ec7e7c9e8e6b?w=500"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("product-container");
const recommendBox = document.getElementById("recommend-container");
const cartCount = document.getElementById("cart-count");

cartCount.textContent = cart.length;

function displayProducts(list){
    container.innerHTML = "";
    list.forEach(p=>{
        container.innerHTML += `
        <div class="card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
            <button onclick="recommend(${p.id})">Similar</button>
        </div>`;
    });
}

function addToCart(id){
    cart.push(products.find(p=>p.id===id));
    localStorage.setItem("cart",JSON.stringify(cart));
    cartCount.textContent = cart.length;
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