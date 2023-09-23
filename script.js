function redirectToAnotherPageIsfest() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/isfest.html";
}
function redirectToAnotherPagetechfest() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/techfest.html";
}
function redirectToAnotherPageExcess() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/excess.html";
}
function redirectToAnotherPageEcolab() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/ecolab.html";
}
function redirectToAnotherPageTpm() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/tpm.html";
}
function ecolab() {
  // You can specify the URL of the page you want to redirect to
  window.location.href =
    "https://www.figma.com/file/axWzCX9KOodIC6lKyurcPH/EDG?type=design&node-id=0%3A1&mode=design&t=lVFwwamIpnR7vTTe-1";
}
function redirectToAnotherPageStich() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/stich.html";
}
function redirectToAnotherPagePiscis() {
  // You can specify the URL of the page you want to redirect to
  window.location.href = "./page/piscis.html";
}

function openYouTube() {
  // Replace 'https://www.youtube.com' with the YouTube URL you want to open
  window.open("https://www.youtube.com", "_blank");
}
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Student", "Learner", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
