export function setCurrentYear(): void {
  const year = String(new Date().getFullYear());
  document.querySelectorAll<HTMLElement>("[data-current-year]").forEach((el) => {
    el.textContent = year;
  });
}
