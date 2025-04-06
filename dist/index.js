document.getElementById('headerBars').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  });