import "./styles/styles.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const blurHeader = () => {
  const header = document.body.querySelector("[data-js-header]");

  if (header) {
    header.classList.remove("is-blured");

    window.addEventListener("scroll", () => {
      if (scrollY > 0 || !header.classList.contains("is-blured")) {
        header.classList.add("is-blured");
      }
      if (scrollY === 0) {
        header.classList.remove("is-blured");
      }
    });
  }
};

const useMobileMenu = () => {
  const header = document.body.querySelector("[data-js-header]");
  const navigation = header.querySelector("[data-js-navigation]");
  const button = navigation.querySelector("[data-js-navigation-button]");

  let isMenuOpened = false;

  const openMenu = () => {
    header.classList.add("is-menu-opened");
    navigation.classList.add("is-menu-opened");
    isMenuOpened = true;
  };

  const closeMenu = () => {
    header.classList.remove("is-menu-opened");
    navigation.classList.remove("is-menu-opened");
    isMenuOpened = false;
  };

  button?.addEventListener("click", () => {
    if (isMenuOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (isMenuOpened) {
      closeMenu();
    }
  });
};

const initGallerySlider = () => {
  const swiper = new Swiper("[data-js-swiper]", {
    direction: "horizontal",
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: "[data-js-swiper-button-next]",
      prevEl: "[data-js-swiper-button-prev]",
    },
    width: null,
    spaceBetween: 20,
    breakpoints: {
      768: {
        width: 727,
        spaceBetween: 30,
      },
      1025: {
        width: 796,
      },
    },
  });
};

blurHeader();
useMobileMenu();
initGallerySlider();
