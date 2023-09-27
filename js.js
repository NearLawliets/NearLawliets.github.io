// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".navigation, .nav-img, .home, .about-home", {
  origin: "top",
});

ScrollReveal().reveal(".about-container, .about-blog", {
  origin: "bottom",
});

ScrollReveal().reveal(
  ".course, .profile, .trust, .about-feature, .blog-container",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(".features, .registration, .course-inner, .contact", {
  origin: "right",
});

// Navbar
$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});
