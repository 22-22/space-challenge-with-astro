const nav = document.querySelector("nav");
const menuOpenBtn = document.querySelector("#menuOpenBtn");
const menuCloseBtn = document.querySelector("#menuCloseBtn");

const openMenu = (evt: Event) => {
  if (nav?.getAttribute("data-visible") === "false") {
    menuOpenBtn?.setAttribute("aria-expanded", "true");
    menuOpenBtn?.classList.add("hidden");
    nav.setAttribute("data-visible", "true");
    nav.classList.remove("translate-x-full");
  }
  evt?.stopPropagation();
};

const closeMenu = () => {
  if (nav?.getAttribute("data-visible") === "true") {
    menuOpenBtn?.setAttribute("aria-expanded", "false");
    menuOpenBtn?.classList.remove("hidden");
    nav.setAttribute("data-visible", "false");
    nav.classList.add("translate-x-full");
  }
};

menuOpenBtn?.addEventListener("click", openMenu);
menuCloseBtn?.addEventListener("click", closeMenu);

nav?.addEventListener("click", (evt: Event) => evt.stopPropagation());

document.addEventListener("click", closeMenu);
