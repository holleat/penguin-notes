(function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("menuToggle");
  const yearSpan = document.getElementById("year");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar--open");
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();