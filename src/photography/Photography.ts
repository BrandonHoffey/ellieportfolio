document.addEventListener("DOMContentLoaded", () => {
  const headerButton = document.getElementById("header");

  if (headerButton) {
    headerButton.addEventListener("click", () => {
      window.location.href = "/index.html";
    });
  }

  const barsContainer = document.getElementById("barsContainer");
  barsContainer?.addEventListener("click", toggleMenu);

  const photos = document.querySelectorAll<HTMLImageElement>(".photographyPhotos img");

  photos.forEach((photo) => {
    photo.addEventListener("click", (event: Event) => {
      const clickedImageSrc = (event.target as HTMLImageElement).src;
      const enlargedImage = document.getElementById("enlargedImage") as HTMLImageElement;
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

  const closeButton = document.getElementById("closeButton") as HTMLButtonElement;
  const enlargedImageContainer = document.getElementById("enlargedImageContainer");
  const overlay = document.getElementById("overlay");

  closeButton?.addEventListener("click", () => {
    console.log("Close button clicked");
    if (enlargedImageContainer && overlay) {
      enlargedImageContainer.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  overlay?.addEventListener("click", () => {
    closeButton?.click();
  });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && enlargedImageContainer && overlay) {
      enlargedImageContainer.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }
});
