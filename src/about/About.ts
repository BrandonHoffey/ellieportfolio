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
      toggleAboutMenu();
    });
  }
});

function toggleAboutMenu() {
  const aboutMenu = document.getElementById("aboutMenu");
  if (aboutMenu) {
    if (aboutMenu.style.display === "block") {
      aboutMenu.style.display = "none";
    } else {
      aboutMenu.style.display = "block";
    }
  }
}
