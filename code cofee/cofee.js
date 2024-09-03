let navbar = document.querySelector('.navbar');

document.querySelector('menu1').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove("active");
    searchForm.classList.remove("active");
}

let cartItem = document.querySelector(".cart-container");

document.querySelector(".search1").onclick = () => {
    cartItem.classList.toggle("active");
    navbar.classList.remove('active');
    searchForm.classList.remove("active");
}

let searchForm = document.querySelector(".search-from");

document.querySelector(".shop1").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove('active');
    cartItem.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove("active");
    searchForm.classList.remove("active");
}