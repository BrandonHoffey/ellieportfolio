document.addEventListener("DOMContentLoaded", () => {
  const headerButton = document.getElementById("header");

  if (headerButton) {
    headerButton.addEventListener("click", () => {
      window.location.href = "/index.html";
    });
  }

  const barsContainer = document.getElementById("barsContainer");
  barsContainer?.addEventListener("click", toggleMenu);

  function toggleMenu(): void {
    const menu = document.getElementById("menu");
    const body = document.body;

    if (menu) {
      if (menu.style.display === "block") {
        menu.style.display = "none";
        body.classList.remove("menu-active");
      } else {
        menu.style.display = "block";
        body.classList.add("menu-active");
      }
    }
  }
});