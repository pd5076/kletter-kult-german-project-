var navbarOpen = document.querySelector(".nav-open");
var navbarClose = document.querySelector(".nav-close");
var mobileNav = document.querySelector(".mobile-nav");
var navLinks = document.querySelector(".nav-links");
var desktopNav = document.querySelector(".desktop-nav");

// Navigation Bar Open
navbarOpen.addEventListener("click", function () {
  mobileNav.style.display = "block";
  navbarClose.style.display = "block";
  navbarOpen.style.display = "none";
});
//Navigation Bar Close
navbarClose.addEventListener("click", function () {
  mobileNav.style.display = "none";
  navbarClose.style.display = "none";
  navbarOpen.style.display = "block";
});

// ANIMATION ON SCROLL
AOS.init({
  duration: 1200,
});

//post request to redirect the join message
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      document.querySelector(".thankyou-msg").style.display = "block";
      document.querySelector(".form-container").style.display = "none";
    });
  });
});
