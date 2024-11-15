document.addEventListener("DOMContentLoaded", function () {
  const photographyButton = document.getElementById("photographyButton");

  if (photographyButton) {
    photographyButton.addEventListener("click", function () {
      // Create an anchor element dynamically
      const photographyLink = document.createElement('a');
      photographyLink.href = './src/photography/Photography.html';
      
      // Append it to the body (it won’t be visible)
      document.body.appendChild(photographyLink);
      
      // Simulate a click on the anchor element to navigate
      photographyLink.click();
      
      // Optionally, remove the anchor element after the click
      document.body.removeChild(photographyLink);
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
  const cinematographyButton = document.getElementById("cinematographyButton");

  if (cinematographyButton) {
    cinematographyButton.addEventListener("click", function () {
      window.location.href =
        "http://127.0.0.1:5500/src/cinematography/Cinematography.html";
    });
  }
});
