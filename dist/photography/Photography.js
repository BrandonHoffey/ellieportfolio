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
    const photos = document.querySelectorAll(".photographyPhotos img");
    photos.forEach((photo) => {
        photo.addEventListener("click", (event) => {
            const clickedImageSrc = event.target.src;
            const enlargedImage = document.getElementById("enlargedImage");
            enlargedImage.src = clickedImageSrc;
            const enlargedImageContainer = document.getElementById("enlargedImageContainer");
            const overlay = document.getElementById("overlay");
            if (enlargedImageContainer && overlay) {
                enlargedImageContainer.style.display = "block";
                overlay.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });
    const closeButton = document.getElementById("closeButton");
    const enlargedImageContainer = document.getElementById("enlargedImageContainer");
    const overlay = document.getElementById("overlay");
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", () => {
        console.log("Close button clicked");
        if (enlargedImageContainer && overlay) {
            enlargedImageContainer.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "";
        }
    });
    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", () => {
        closeButton === null || closeButton === void 0 ? void 0 : closeButton.click();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && enlargedImageContainer && overlay) {
            enlargedImageContainer.style.display = "none";
            overlay.style.display = "none";
            document.body.style.overflow = "";
        }
    });
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
//# sourceMappingURL=Photography.js.map