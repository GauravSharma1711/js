document.addEventListener('DOMContentLoaded',()=>{

        const products = [
        {id:1 , name:"prduct 1", price:23.45},
        {id:2 , name:"prduct 2", price:25.45},
        {id:3 , name:"prduct 3", price:22.45}
    ]


    let cart = [];

 let productlist = document.getElementById('product-list');
 let  cartitems = document.getElementById('cart-items');
 let   emptycartmsg = document.getElementById('empty-cart');
 let   carttotalmsg =  document.getElementById('cart-total');
 let    totalpricedisplay =  document.getElementById('total-price');
 let    checkoutbtn = document.getElementById('checkout-btn');


 products.forEach((product)=>{
    let productdiv = document.createElement('div');
    productdiv.classList.add('product');
    productdiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `
    productlist.appendChild(productdiv);
 })

 productlist.addEventListener('click',(e)=>{

    if(e.target.tagName =='BUTTON'){
        const productid = parseInt(e.target.getAttribute('data-id'));
       let product = products.find(p=>p.id===productid);
       addtocart(product);
    }

 })

function addtocart(product){
cart.push(product);
rendercart(product);
}

function rendercart(product){
   cartitems.innerText = "";
   let totalprice = 0;

   if(cart.length>0){
      emptycartmsg.classList.add('hidden');
           carttotalmsg.classList.remove('hidden');

cart.forEach((item,index)=>{
   totalprice+=item.price;
      let renderdiv = document.createElement('div');
    renderdiv.innerHTML = `
    <span>${item.name}-${item.price}</span>
    `
    cartitems.appendChild(renderdiv);
    totalpricedisplay.textContent = `${totalprice.toFixed(2)}`
})


   }else{
      emptycartmsg.classList.remove('hidden');
      cartitems.innerHTML= ' ';
      totalpricedisplay.textContent= `$0.00`
   }
   
}

checkoutbtn.addEventListener('click', ()=>{
   cart.length = 0;
   alert("checked out successfully")
   rendercart();
})




 })