$(function () {
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="Next" /></button>',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="Prev" /></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

$(function () {
  $(".bottom-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
});

//Меню слайдер
const menuSlide = document.querySelector("#top__menu");
const menuBtn = document.querySelector(".menu__btn");
menuBtn.onclick = function () {
  menuSlide.classList.toggle("top-menu-active");
};

//Кнопка наверх
window.onload = function () {
  //window.scrollTo(x,y)
  var scrolled;
  var timer;

  document.querySelector(".button__toTop-arrow").onclick = function () {
    scrolled = window.pageYOffset;
    //window.scrollTo(0,0);
    scrollToTop();
  };

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 150; //100 - скорость прокрутки
      timer = setTimeout(scrollToTop, 50);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
};
