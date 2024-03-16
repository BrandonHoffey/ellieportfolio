document.addEventListener("DOMContentLoaded", function () {
  const photographyButton = document.getElementById("photographyButton");

  if (photographyButton) {
    photographyButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/src/photography/Photography.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.getElementById("aboutButton");

  if (aboutButton) {
    aboutButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/src/about/About.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contactButton");

  if (contactButton) {
    contactButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/ellieportfolio/src/contact/Contact.html";
    });
  }
});
