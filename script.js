document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const copyBtn = document.getElementById("copyNameBtn");
  const status = document.getElementById("copyStatus");

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("Harsh Thakkar");
      status.textContent = "Name copied to clipboard.";
      setTimeout(() => {
        status.textContent = "Portfolio created with HTML, Bootstrap & JavaScript.";
      }, 1800);
    } catch {
      status.textContent = "Harsh Thakkar";
    }
  });

  // Close the mobile navbar after clicking a navigation link.
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
