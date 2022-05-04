$(".owl-carousel").owlCarousel({
  items: 1,
  nav: false,
});

//Go to top button
var movetop = document.getElementById("movetop");
var header = document.getElementById("site-header");

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  sticky();
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("nav-fixed");
    movetop.style.display = "block";
  } else {
    header.classList.remove("nav-fixed");
    movetop.style.display = "none";
  }
}

// Darkmode
var icon = document.getElementById("moon");
icon.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon = document.getElementById("moon").style.opacity = "0";
    icon = document.getElementById("sun").style.opacity = "1";
  } else {
    icon = document.getElementById("sun").style.opacity = "0";
    icon = document.getElementById("moon").style.opacity = "1";
  }
};

// navbar

// var bar = document.getElementsByClassName("icon-expand");
// var collapse = getElementById("navbar-content");
// bar.onclick = function () {
//   document.collapse.classList.toggle("show");
//   if (document.collapse.classList.contains("show")) {
//     bar = document.getElementsByClassName("icon-expand").style.display = "none";
//     bar = document.getElementsByClassName("icon-close").style.display = "block";
//   } else {
//     bar = document.getElementsByClassName("icon-close").style.display = "none";
//     bar = document.getElementsByClassName("icon-expand").style.display =
//       "block";
//   }
// };
