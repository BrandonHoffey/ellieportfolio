document.addEventListener("DOMContentLoaded", function () {
  const headerButton = document.getElementById("header");

  if (headerButton) {
    headerButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/ellieportfolio/src/index.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".aboutImage");
  images.forEach((image) => {
    const imageElement = image as HTMLImageElement;
    imageElement.addEventListener("mouseenter", function () {
      imageElement.style.transform = "scale(2)";
      imageElement.style.transition = "transform 0.3s";
      imageElement.style.zIndex = "1";
    });
    imageElement.addEventListener("mouseleave", function () {
      imageElement.style.transform = "scale(1)";
      imageElement.style.zIndex = "0";
      imageElement.style.transition = "transform 0.3s";
    });
  });
});
