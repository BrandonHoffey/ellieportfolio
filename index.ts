// First, ensure that the 'menuToggle' element exists and that we can interact with it
const menuToggle: HTMLElement | null = document.getElementById('headerBars');
const modal: HTMLElement | null = document.getElementById('modal');

// Check if elements exist before adding event listeners
if (menuToggle && modal) {
  // Add a click event listener to the menu toggle icon
  menuToggle.addEventListener('click', () => {
    // Toggle the modal visibility by checking the current display style
    if (modal.style.display === 'flex') {
      modal.style.display = 'none'; // Hide the modal if it's currently visible
    } else {
      modal.style.display = 'flex'; // Show the modal if it's currently hidden
    }
  });
}