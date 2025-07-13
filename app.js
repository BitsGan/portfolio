document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Portfolio ready to inspire the future!");
  highlightActiveLink();
});

function highlightActiveLink() {
  const links = document.querySelectorAll("nav a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
