
let nav = document.getElementById('nav-menu');


// window.onscroll = onScroll();

window.onscroll = function() {
  if (window.scrollY > 0) {
    nav.style.background = "white";
    nav.style.boxShadow = "2px 2px 5px black"
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none"
  }
}


// add to cart function
let cartQty1 = document.getElementById('quantity1');
let qty1 = 1;

function add1() {
  qty1 = qty1 + 1
  cartQty1.innerHTML = qty1;
}

function subtract1() {
  if (qty1 > 0) {
    qty1--;
    cartQty1.innerHTML = qty1;
  } else {
    alert('Number must be more than 0');
  }

}

let cartQty2 = document.getElementById('quantity2');
let qty2 = 1;

function add2() {
  qty2 = qty2 + 1
  cartQty2.innerHTML = qty2;
}

function subtract2() {
  if (qty2 > 0) {
    qty2--;
    cartQty2.innerHTML = qty2;
  } else {
    alert('Number must be more than 0');
  }

}


let cartQty3 = document.getElementById('quantity3');
let qty3 = 1;

function add3() {
  qty3 = qty3 + 1
  cartQty3.innerHTML = qty3;
}

function subtract3() {
  if (qty3 > 0) {
    qty3--;
    cartQty3.innerHTML = qty3;
  } else {
    alert('Number must be more than 0');
  }

}


