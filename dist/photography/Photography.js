"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const headerButton = document.getElementById("header");
    if (headerButton) {
        headerButton.addEventListener("click", function () {
            window.location.href = "http://127.0.0.1:5500/src/index.html";
        });
    }
    const barsContainer = document.getElementById("barsContainer");
    barsContainer === null || barsContainer === void 0 ? void 0 : barsContainer.addEventListener("click", toggleMenu);
    const photos = document.querySelectorAll(".photographyPhotos img");
    photos.forEach((photo) => {
        photo.addEventListener("click", function (event) {
            const clickedImageSrc = event.target.src;
            const enlargedImage = document.getElementById("enlargedImage");
            enlargedImage.src = clickedImageSrc;
            const enlargedImageContainer = document.getElementById("enlargedImageContainer");
            if (enlargedImageContainer) {
                enlargedImageContainer.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });
    const closeButton = document.getElementById("closeButton");
    const enlargedImageContainer = document.getElementById("enlargedImageContainer");
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", function () {
        if (enlargedImageContainer) {
            enlargedImageContainer.style.display = "none";
            document.body.style.overflow = "";
        }
    });
});
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "block";
        }
    }
}
//# sourceMappingURL=Photography.js.map