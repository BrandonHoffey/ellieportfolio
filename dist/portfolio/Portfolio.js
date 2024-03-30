"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const headerButton = document.getElementById("header");
    if (headerButton) {
        headerButton.addEventListener("click", function () {
            window.location.href =
                "http://127.0.0.1:5500/ellieportfolio/src/index.html";
        });
    }
});
//# sourceMappingURL=Portfolio.js.map