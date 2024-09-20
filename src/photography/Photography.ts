document.addEventListener("DOMContentLoaded", function () {
  const headerButton = document.getElementById("header");

  if (headerButton) {
    headerButton.addEventListener("click", function () {
      window.location.href = "http://127.0.0.1:5500/src/index.html";
    });
  }

  const barsContainer = document.getElementById("barsContainer");
  barsContainer?.addEventListener("click", toggleMenu);

  const photos = document.querySelectorAll(".photographyPhotos img");

  photos.forEach((photo) => {
    photo.addEventListener("click", function (event) {
      const clickedImageSrc = (event.target as HTMLImageElement).src;
      const enlargedImage = document.getElementById(
        "enlargedImage"
      ) as HTMLImageElement;
      enlargedImage.src = clickedImageSrc;
      const enlargedImageContainer = document.getElementById(
        "enlargedImageContainer"
      );
      const overlay = document.getElementById("overlay");
      if (enlargedImageContainer && overlay) {
        enlargedImageContainer.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeButton = document.getElementById("closeButton");
  const enlargedImageContainer = document.getElementById(
    "enlargedImageContainer"
  );
  const overlay = document.getElementById("overlay");

  closeButton?.addEventListener("click", function () {
    if (enlargedImageContainer && overlay) {
      enlargedImageContainer.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }
  }
});
