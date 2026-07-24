const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const button = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");

if (button && nav) {
  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}
