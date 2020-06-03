$(document).ready(function () {
  $(".header__slider").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  });
  $(".trade-hits__list").slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
  });
  $(".works__list").slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
  });
  $(".sertificates__list").slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
  });
});
