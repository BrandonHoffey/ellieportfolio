// First, ensure that the 'menuToggle' element exists and that we can interact with it
const menuToggle: HTMLElement | null = document.getElementById("headerBars");
const modal: HTMLElement | null = document.getElementById("modal");

// Check if elements exist before adding event listeners
if (menuToggle && modal) {
  // Add a click event listener to the menu toggle icon
  menuToggle.addEventListener("click", () => {
    // Toggle the modal visibility by checking the current display style
    if (modal.style.display === "flex") {
      modal.style.display = "none"; // Hide the modal if it's currently visible
    } else {
      modal.style.display = "flex"; // Show the modal if it's currently hidden
    }
  });
}

// Add navigation functionality to modal links
document.addEventListener("DOMContentLoaded", () => {
  const headerName = document.getElementById("headerName");
  const cinematographyLink = document.getElementById("cinematographyLink");
  const experienceLink = document.getElementById("experienceLink");
  const visualsLink = document.getElementById("visualsLink");

  // Make header name clickable to return to home
  if (headerName) {
    headerName.addEventListener("click", () => {
      window.location.href = "/index.html";
    });
  }

  if (cinematographyLink) {
    cinematographyLink.addEventListener("click", () => {
      window.location.href = "./src/cinematography/Cinematography.html";
    });
  }

  if (experienceLink) {
    experienceLink.addEventListener("click", () => {
      window.location.href = "./src/experience/Experience.html";
    });
  }

  if (visualsLink) {
    visualsLink.addEventListener("click", () => {
      window.location.href = "./src/photography/Photography.html";
    });
  }

  // Close modal when clicking outside of it
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
