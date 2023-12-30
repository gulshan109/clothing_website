let nav = document.getElementById('nav');
let main = document.getElementById('main');
let shop = document.getElementById('shop');
let menu_item = document.getElementById('menu-itm')
let shop_item = document.getElementById('shop-item');
let white_logo = document.getElementById('white-logo');
let black_logo = document.getElementById('black-logo');
let about_container = document.querySelector('.about-container');
let about = document.getElementById('about');
let home = document.getElementById('home');
let home_container = document.getElementById('home-container');
let bottom_bar = document.getElementById('bottom-bar');
let footer = document.getElementById('footer');
let contact = document.getElementById('contact');
let contact_container = document.getElementById('contact-container');
let item_container = document.getElementById('item-container');


document.addEventListener('scroll' , function(){
    var scrollPosition = window.scrollY;
    if(scrollPosition ===0){
        nav.style.backgroundColor = "transparent";
        nav.style.top = "2.5rem";
        black_logo.style.display = "none"
        menu_item.style.color = "wheat"
    }
    else{
        nav.style.backgroundColor = "white";
        nav.style.top = "0";
        black_logo.style.display = "block"
        menu_item.style.color = "black"
        nav.style.transition = "0.5s"
    }
})

home.addEventListener('click' , function(){
    about_container.style.display = "none"
    home_container.style.display = "flex"
    footer.style.bottom = '-95rem'
    // bottom_bar.style.position = "absolute"
    // bottom_bar.style.top = "20vh"
    contact_container.style.display = "none"
})


shop.addEventListener("mouseover" , () => {
    nav.style.background = "white"
    white_logo.style.display = "none"
    black_logo.style.display = "inline"
    menu_item.style.color = "black"
    shop_item.style.display = "flex"
    // item_container.style.display = "block"
})
home_container.addEventListener("mouseover" ,() =>{
    nav.style.background = "transparent"
    white_logo.style.display = "inline"
    black_logo.style.display = "none"
    shop_item.style.display = "none"
    menu_item.style.color = "white"
} )

about.addEventListener('click' , function(){
    about_container.style.display = "flex"
    home_container.style.display = "none"
    // bottom_bar.style.position = "absolute"
    // bottom_bar.style.top = "230vh"
    footer.style.bottom = '-80rem'
    contact_container.style.display = "none"

})


contact.addEventListener('click' , function(){
    contact_container.style.display = "flex"
    home_container.style.display = "none"
    about_container.style.display = "none"
})
shop_item.addEventListener('mouseover', function(){
    // nav.style.background = "white"
    // white_logo.style.display = "none"
    // black_logo.style.display = "inline"
    // shop_item.style.display = "flex"
    // menu_item.style.color = "black"
    // shop_item.style.display = "flex"

})
shop_item.addEventListener('mouseout' , function(){
    // nav.style.background = "transparent"
    // white_logo.style.display = "inline"
    // black_logo.style.display = "none"
    // shop_item.style.display = "none"
    // menu_item.style.color = "white"
    // shop_item.classList.remove('shop_item')
})

