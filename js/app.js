// menu
const menuBtn = document.getElementById("menu");
const menuBtnIcon = document.querySelector("#menu i");
const menu = document.querySelector("header nav .container ul");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuBtnIcon.classList.toggle("fa-bars");
    menuBtnIcon.classList.toggle("fa-xmark");
})

// Scroll animation

const cards = document.querySelectorAll(".cards-div div");
const types = document.querySelector(".types-div");
const blogCards = document.querySelectorAll(".cards-div div");
const swiper = document.querySelector(".mySwiper");
const growEfficient = document.querySelector(".grow-efficiant div");
const footerNav = document.querySelector("footer nav");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    const typesTop = types.getBoundingClientRect().top;
    const swiperTop = swiper.getBoundingClientRect().top;
    const growEfficientTop = growEfficient.getBoundingClientRect().top;
    const footerNavTop = footerNav.getBoundingClientRect().top;

    if (typesTop < triggerBottom) {
        types.classList.add("show");
    } else {
        types.classList.remove("show");
    }

    if (swiperTop < triggerBottom) {
        swiper.classList.add("show");
    } else {
        swiper.classList.remove("show");
    }

    if (growEfficientTop < triggerBottom) {
        growEfficient.classList.add("show");
    } else {
        growEfficient.classList.remove("show");
    }

    if (footerNavTop < triggerBottom) {
        footerNav.classList.add("show");
    } else {
        footerNav.classList.remove("show");
    }

    cards.forEach((e) => {
        const elementTop = e.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            e.classList.add("show");
        } else {
            e.classList.remove("show");
        }
    })

    blogCards.forEach((e) => {
        const elementTop = e.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            e.classList.add("show");
        } else {
            e.classList.remove("show");
        }
    })
})


// Like products
const hearts = document.querySelectorAll("#heart");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");
    })
})