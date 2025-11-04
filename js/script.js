document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach((button) => {
    const icon = button.querySelector('.icon-toggle');

    // Ensure icon exists (if you have multiple buttons with icons)
    if (icon) {
      // Update icons when collapsing/expanding
      button.addEventListener('click', () => {
        // Wait for Bootstrap collapse animation to finish
        setTimeout(() => {
          if (button.classList.contains('collapsed')) {
            icon.classList.remove('bi-dash-lg');
            icon.classList.add('bi-plus-lg');
          } else {
            icon.classList.remove('bi-plus-lg');
            icon.classList.add('bi-dash-lg');
          }
        }, 200);
      });
    }
  });
});
