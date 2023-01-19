const sliderItems = [
    {
        imagePath: "image-hero-1",
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        imagePath: "image-hero-2",
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        imagePath: "image-hero-3",
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

let indexActualSlide = 0;

function $(selector) {
    const element = document.querySelectorAll(selector);
    return element.length <= 1 ? element[0] : element;
}

document.addEventListener("DOMContentLoaded", () => {
    let documentElement = document.documentElement.style;
    const menuMobileElement = $(".header__nav__menu-mobile");
    const closeMenuMobileElement = $(".header__nav__close-menu");
    const menuClassList = $(".header__nav__menu").classList;
    const nextSlideElement = $(".content__slider__next");
    const previusSlideElement = $(".content__slider__previous");

    const prefixPathImage = {
        folder: "./images",
        desktop: "desktop-",
        mobile: "mobile-"
    };

    const sliderElement = {
        title: $(".content__item__title"),
        description: $(".content__item__description"),
        image: $(".main__menu__background-image"),
        source: $(".image-source"),
    };

    function openMenuMobile() {
        menuMobileElement.addEventListener("click", () => {
            menuClassList.add("header__nav__menu--open");
            documentElement.overflow = "hidden";
        });
    }

    function closeMenuMobile() {
        closeMenuMobileElement.addEventListener("click", () => {
            menuClassList.remove("header__nav__menu--open");
            documentElement.overflow = "initial";
        });
    }

    function loadSlider(indexSlide) {
        let slide = sliderItems[indexSlide];

        sliderElement.title.innerText = slide.title;
        sliderElement.description.innerText = slide.description;
        sliderElement.image.srcset = `${prefixPathImage.folder}/${prefixPathImage.desktop}${slide.imagePath}.jpg`;
        sliderElement.source.srcset = `${prefixPathImage.folder}/${prefixPathImage.mobile}${slide.imagePath}.jpg`;
    }

    nextSlideElement.addEventListener("click", () => {
        const firstImageIndex = 0;
        indexActualSlide = indexActualSlide + 1 >= sliderItems.length ? firstImageIndex : indexActualSlide += 1;
        loadSlider(indexActualSlide);
    });

    previusSlideElement.addEventListener("click", () => {
        const lastImageIndex = sliderItems.length - 1;
        indexActualSlide = indexActualSlide - 1 < 0 ? lastImageIndex : indexActualSlide -= 1;
        loadSlider(indexActualSlide);
    });

    openMenuMobile();
    closeMenuMobile();
    loadSlider(indexActualSlide);
});