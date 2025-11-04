document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelector(".accordion");

  if (!accordion) return;

  // Listen for when an accordion item is shown
  accordion.addEventListener("show.bs.collapse", function (e) {
    const button = e.target
      .previousElementSibling
      .querySelector(".accordion-button");
    const icon = button.querySelector(".icon-toggle");

    if (icon) {
      icon.classList.remove("bi-plus-lg");
      icon.classList.add("bi-dash-lg");
    }
  });

  // Listen for when an accordion item is hidden
  accordion.addEventListener("hide.bs.collapse", function (e) {
    const button = e.target
      .previousElementSibling
      .querySelector(".accordion-button");
    const icon = button.querySelector(".icon-toggle");

    if (icon) {
      icon.classList.remove("bi-dash-lg");
      icon.classList.add("bi-plus-lg");
    }
  });
});

