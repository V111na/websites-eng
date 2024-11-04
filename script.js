let cartcount = 0;

function addToCart() {
    cartcount++;
    DocumentFragment.getElementById('cart-count').innerText=cartcount;

}

setInterval(addToCart,2000);