function $(selector) {
    const element = document.querySelectorAll(selector);
    return element.length <= 1 ? element[0] : element;
}


document.addEventListener("DOMContentLoaded", () => {
    const menuMobile = $(".header__nav__menu-mobile");
    const closeMenuMobile = $(".header__nav__close-menu");
    const menuClassList = $(".header__nav__menu").classList;
    let documentElement = document.documentElement.style;

    function openMenu() {
        menuMobile.addEventListener("click", () => {
            menuClassList.add('header__nav__menu--open');
            documentElement.overflow = 'hidden';
        });
    }

    function closeMenu() {
        closeMenuMobile.addEventListener("click", () => {
            menuClassList.remove('header__nav__menu--open');
            documentElement.overflow = 'initial';
        });
    }

    openMenu();
    closeMenu();
});