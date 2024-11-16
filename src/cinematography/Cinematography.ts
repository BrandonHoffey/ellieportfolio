document.addEventListener("DOMContentLoaded", function () {
  const headerButton = document.getElementById("header");

  if (headerButton) {
    headerButton.addEventListener("click", function () {
      window.location.href = "/index.html";
    });
  }

  const barsContainer = document.getElementById("barsContainer");

  if (barsContainer) {
    barsContainer.addEventListener("click", function () {
      toggleCinematographyMenu();
    });
  }
});

function toggleCinematographyMenu() {
  const cinematographyMenu = document.getElementById("cinematographyMenu");
  if (cinematographyMenu) {
    if (cinematographyMenu.style.display === "block") {
      cinematographyMenu.style.display = "none";
    } else {
      cinematographyMenu.style.display = "block";
    }
  }
}