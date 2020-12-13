$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
  });

  $(".header__btn").on("click", function () {
    $(".menu").toggleClass("active");
  });

  $(".close-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });
});
