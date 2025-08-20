"use strict";
const menuToggle = document.getElementById("headerBars");
const modal = document.getElementById("modal");
if (menuToggle && modal) {
    menuToggle.addEventListener("click", () => {
        if (modal.style.display === "flex") {
            modal.style.display = "none";
        }
        else {
            modal.style.display = "flex";
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const headerName = document.getElementById("headerName");
    const cinematographyLink = document.getElementById("cinematographyLink");
    const experienceLink = document.getElementById("experienceLink");
    const visualsLink = document.getElementById("visualsLink");
    if (headerName) {
        headerName.addEventListener("click", () => {
            window.location.href = "/index.html";
        });
    }
    if (cinematographyLink) {
        cinematographyLink.addEventListener("click", () => {
            window.location.href = "./src/cinematography/Cinematography.html";
        });
    }
    if (experienceLink) {
        experienceLink.addEventListener("click", () => {
            window.location.href = "./src/experience/Experience.html";
        });
    }
    if (visualsLink) {
        visualsLink.addEventListener("click", () => {
            window.location.href = "./src/photography/Photography.html";
        });
    }
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
//# sourceMappingURL=index.js.map