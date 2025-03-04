// Smooth
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.querySelector(this.getAttribute("href"))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  });
});
// Load
window.addEventListener("load", function () {
  document.body.classList.add("window-loaded");
  //
  AOS.init({
    duration: 1000,
    once: true,
    disable: "mobile",
  });
});
// Scroll
window.addEventListener("scroll", function () {
  const html = document.documentElement;
  const top = html.scrollTop;
  if (top > 100) {
    document.body.classList.add("page-scrolled");
  } else {
    document.body.classList.remove("page-scrolled");
  }
});

$(function () {
  $(".main-header .hs-menu-wrapper > ul").each(function () {
    $(this).after($(this).clone());
    $(this).remove();
  });
  $(".site_menu").addClass("js-enabled");
  $(".site_menu .hs-item-has-children > a").after(
    '<div class="child-trigger"><i></i></div>'
  );
  $(".menu-trigger").click(function () {
    $(".main_menu_inn").slideToggle(250);
    $("body").toggleClass("mobile-open");
    $(this).toggleClass("trigger-open");
    $(".child-trigger,li").removeClass("child-open");
    $(".site_menu .hs-menu-children-wrapper").slideUp(250);
    return false;
  });
  $(".child-trigger").click(function () {
    $(this)
      .parent()
      .siblings(".hs-item-has-children")
      .find(".child-trigger")
      .removeClass("child-open");
    $(this)
      .parent()
      .siblings(".hs-item-has-children")
      .find(".hs-menu-children-wrapper")
      .slideUp(250);
    $(this).next(".hs-menu-children-wrapper").slideToggle(250);
    $(this)
      .next(".hs-menu-children-wrapper")
      .children(".hs-item-has-children")
      .find(".hs-menu-children-wrapper")
      .slideUp(250);
    $(this)
      .next(".hs-menu-children-wrapper")
      .children(".hs-item-has-children")
      .find(".child-trigger")
      .removeClass("child-open");
    $(this).toggleClass("child-open");
    return false;
  });
});

$(document).ready(function () {
  function headerHeight() {
    var elm = $(".header-inner").outerHeight(true);
    $("header.header").css("min-height", elm);
  }
  $(window).on("load resize", headerHeight);
});

function updateHeight() {
  var bodyHeight =
    $(window).height() -
    $("header.header").height() -
    $(".footer-wrapper").height();
  $("#main-content").css("min-height", bodyHeight + "px");
}
updateHeight();
$(window).on("resize", updateHeight);
