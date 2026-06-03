// NAV scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,0.95)";
  } else {
    nav.style.background = "white";
  }
});

// FORM
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
