const itemList = document.querySelector('nav ul');
const burgerIcon = document.querySelector('nav .hamburger-icon') as HTMLImageElement;
const navHeader = document.querySelector('nav') as HTMLElement;
const searchIcon = document.querySelector('.search-icon') as HTMLImageElement;
const searchbar = document.querySelector('.search') as HTMLElement;
const searchClose = document.querySelector('.search img') as HTMLImageElement;

// Show/hide mobile menu
burgerIcon.addEventListener('click',()=>{
    itemList.classList.toggle('show-menu');
})

searchIcon.addEventListener('click',()=>{
    searchbar.classList.toggle('search-show');
    itemList.classList.remove('show-menu')
})

searchClose.addEventListener('click',()=>{
    searchbar.classList.toggle('search-show');
})



// Increase/decrease size for navigation on scroll
window.addEventListener('scroll',()=>{
    window.pageYOffset !=0 ? navHeader.classList.add('nav-small'): navHeader.classList.remove('nav-small');
})
