document.addEventListener("DOMContentLoaded", function () {
  const portfolioButton = document.getElementById("portfolioButton");

  if (portfolioButton) {
    portfolioButton.addEventListener("click", function () {
      window.location.href = "http://127.0.0.1:5500/ellieportfolio/src/portfolio/portfolio.html";
    });
  }
});
