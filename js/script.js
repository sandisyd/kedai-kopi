// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu diklick
document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// Ketika menghilangkan sidebar diluar humberger menu
const buregerMenu = document.querySelector('#humberger-menu')

document.addEventListener('click', function (e) {
    if (!buregerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})