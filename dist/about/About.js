"use strict";
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
            toggleaboutMenu();
        });
    }
});
function toggleaboutMenu() {
    const aboutMenu = document.getElementById("aboutMenu");
    const body = document.body;
    if (aboutMenu) {
        if (aboutMenu.style.display === "block") {
            aboutMenu.style.display = "none";
            body.classList.remove("aboutMenu-active");
        }
        else {
            aboutMenu.style.display = "block";
            body.classList.add("aboutMenu-active");
        }
    }
}
//# sourceMappingURL=About.js.map