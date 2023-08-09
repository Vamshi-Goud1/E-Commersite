const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
    
}

let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"fiynwomsh",
    name:"Casual Shirt",
    price: 45,
    desc: "lorem ipsum dolor sit amet, consectetur adipis",
    img:"./products/f1.jpg" 
},

{  

    id:"hsihijswo",
name:"Casual Shirt",
price: 45,
desc: "lorem ipsum dolor sit amet, consectetur adipis",
img:"./products/f2.jpg"
},

{ 
 id:"bwujwjwomwbh",
name:"Casual",
price: 45,
desc: "lorem ipsum dolor sit amet, consectetur adipis",
img:"./products/f3.jpg"},
];

let basket = [{}];

let generateShop =()=>{
  return (shop.innerHTML = shopItemsData.map((x)=>{
    let {id,name,price,desc,img} =x
return `
<div id= class="shop" id="shop">
    <table width="100%">
        <thead>
            <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>

                <td>Quantity</td>
                <td>Subtotal</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                <td><img src=${img} alt=""></td>
                <td>${name}</td>
                <td>$${price}</td>
                <td><div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id="${id}" class="quantity">0</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div></td>
                <td>$118.19</td>
            </tr>
      </tbody>
    </table>
  </div>`
  }).join(" "));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    
    let serach = basket.find(x=>x.id === selectedItem.id);

    if(serach === undefined){
        
    basket.push({
        id:selectedItem.id,
        item: 1,
    });

    }
    else{
        serach.item +=1;
    }
     

    // console.log(basket);
    update(selectedItem.id);
  
};

let decrement = (id) => {
    let selectedItem = id;
    
    let serach = basket.find(x=>x.id === selectedItem.id);

    if(serach.item === 0){
        
  return;

    }
    else{
        serach.item -=1;
    }
     

    // console.log(basket);
    update(selectedItem.id);
};

let update = (id) => {
    
    let serach = basket.find((x)=> x.id === id)
    // console.log(serach.item);
    document.getElementById(id).innerHTML = serach.item;
    calculation();
};


let calculation = () => {
 let cartIcon =  document.getElementById("cartamount");
 cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y) =>x+y,0);

 console.log(basket.map((x)=> x.item).reduce((x,y) =>x+y,0));
 
}