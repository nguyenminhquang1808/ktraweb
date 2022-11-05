document.getElementById('click_link-search').onclick = function() {
    document.getElementById('onclick-input-search').classList.toggle('activeSearch')
}
var click_search = document.getElementById('onclick-input-search');
click_search.addEventListener('click', function() {
    click_search.classList.toggle('activeSearch');
})


function clickCart() {
    var cart = document.getElementById('cart_block');
    cart.classList.toggle('active_cart-box')
}


// box-cart
var modal= document.getElementById('add-producted_opacity');
var modalOpen = document.querySelectorAll('#add_to-cart');
for(var i = 0 ; i < modalOpen.length; i++) {
    modalOpen[i].onclick = function () {
        modal.classList.toggle('hide')
    }
}
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        modal.classList.toggle('hide')
    }
})

// reponsive 

var open_popup = document.querySelector('.wrap_list-responsive'); // open
var modal_popup = document.querySelector('.wrap_navbar-popup'); // wrap all
var close_popup = document.querySelector('.popup-close'); // close
var navbar_popup = document.getElementById('navbar_popup') // wrap-item

open_popup.addEventListener('click', function() {
    modal_popup.classList.add('active_navbar-popup')
})
close_popup.addEventListener('click', function() {
    modal_popup.classList.remove('active_navbar-popup')
})
modal_popup.addEventListener('click', function() {
    modal_popup.classList.remove('active_navbar-popup')
})
navbar_popup.addEventListener('click', function(e) {
    e.stopPropagation()
})

    