document.addEventListener("DOMContentLoaded", function () {
  const portfolioButton = document.getElementById("portfolioButton");

  if (portfolioButton) {
    portfolioButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/ellieportfolio/src/portfolio/portfolio.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.getElementById("aboutButton");

  if (aboutButton) {
    aboutButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/ellieportfolio/src/about/About.html";
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
