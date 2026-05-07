import "./style.css";

function setupMobileMenu(): void {
  const button = document.getElementById("menu-button");
  const menu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  if (!button || !menu || !iconOpen || !iconClose) return;

  const setOpen = (open: boolean): void => {
    button.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("hidden", !open);
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  const mql = window.matchMedia("(min-width: 1024px)");
  mql.addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

setupMobileMenu();
