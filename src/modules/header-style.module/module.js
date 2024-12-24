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
