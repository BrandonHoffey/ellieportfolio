"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const headerButton = document.getElementById("header");
    if (headerButton) {
        headerButton.addEventListener("click", function () {
            window.location.href = "http://127.0.0.1:5500/src/index.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photographyPhotos img");
    photos.forEach(photo => {
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
//# sourceMappingURL=Photography.js.map