import "./styles/styles.scss";

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

blurHeader();
useMobileMenu();
