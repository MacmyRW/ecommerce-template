var itemList = document.querySelector('nav ul');
var burgerIcon = document.querySelector('nav .hamburger-icon');
var navHeader = document.querySelector('nav');
var searchIcon = document.querySelector('.search-icon');
var searchbar = document.querySelector('.search');
var searchClose = document.querySelector('.search img');
// Show/hide mobile menu
burgerIcon.addEventListener('click', function () {
    itemList.classList.toggle('show-menu');
});
searchIcon.addEventListener('click', function () {
    searchbar.classList.toggle('search-show');
    itemList.classList.remove('show-menu');
});
searchClose.addEventListener('click', function () {
    searchbar.classList.toggle('search-show');
});
// Increase/decrease size for navigation on scroll
window.addEventListener('scroll', function () {
    window.pageYOffset != 0 ? navHeader.classList.add('nav-small') : navHeader.classList.remove('nav-small');
});
