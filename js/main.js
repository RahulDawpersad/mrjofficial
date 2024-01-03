// Preloader Functionality
setTimeout(function(){
  $('.wrapper').fadeOut();
}, 3600);



// Blur Header Functionality
window.onscroll = function () {
    var navbar = document.querySelector(".header_section");
    if (window.scrollY > 0) {
      navbar.classList.add("blurred");
    } else {
      navbar.classList.remove("blurred");
    }
  };

  // Back to top functionality
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
