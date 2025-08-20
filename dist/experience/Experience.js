"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const headerButton = document.getElementById("header");
    if (headerButton) {
        headerButton.addEventListener("click", () => {
            window.location.href = "/index.html";
        });
    }
    const barsContainer = document.getElementById("barsContainer");
    barsContainer === null || barsContainer === void 0 ? void 0 : barsContainer.addEventListener("click", toggleMenu);
    function toggleMenu() {
        const menu = document.getElementById("menu");
        const body = document.body;
        if (menu) {
            if (menu.style.display === "block") {
                menu.style.display = "none";
                body.classList.remove("menu-active");
            }
            else {
                menu.style.display = "block";
                body.classList.add("menu-active");
            }
        }
    }
});
//# sourceMappingURL=Experience.js.map