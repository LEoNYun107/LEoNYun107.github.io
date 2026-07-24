const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const button = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");

if (button && nav) {
  const closeMenu = (returnFocus = false) => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");

    if (returnFocus) button.focus();
  };

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) nav.querySelector("a")?.focus();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      closeMenu(true);
    }
  });
}
