document.addEventListener("DOMContentLoaded", function () {
  const headerButton = document.getElementById("header");

  if (headerButton) {
    headerButton.addEventListener("click", function () {
      window.location.href = "http://127.0.0.1:5500/src/index.html";
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
