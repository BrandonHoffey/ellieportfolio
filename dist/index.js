"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const photographyButton = document.getElementById("photographyButton");
    if (photographyButton) {
        photographyButton.addEventListener("click", function () {
            const photographyLink = document.createElement("a");
            photographyLink.href = "./src/photography/Photography.html";
            document.body.appendChild(photographyLink);
            photographyLink.click();
            document.body.removeChild(photographyLink);
        });
    }
    const aboutButton = document.getElementById("aboutButton");
    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            const aboutLink = document.createElement("a");
            aboutLink.href = "./src/about/About.html";
            document.body.appendChild(aboutLink);
            aboutLink.click();
            document.body.removeChild(aboutLink);
        });
    }
    const cinematographyButton = document.getElementById("cinematographyButton");
    if (cinematographyButton) {
        cinematographyButton.addEventListener("click", function () {
            const cinematographyLink = document.createElement("a");
            cinematographyLink.href = "./src/cinematography/Cinematography.html";
            document.body.appendChild(cinematographyLink);
            cinematographyLink.click();
            document.body.removeChild(cinematographyLink);
        });
    }
});
//# sourceMappingURL=index.js.map