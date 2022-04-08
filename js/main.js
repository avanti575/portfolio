//Слайдер

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
    });
    
$('.popup-gmaps').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

    $('.block__link').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    // Menu со скролом к цели

$('ul.menu-top a[href^="#"]').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
       scrollTop: $(target).offset().top
    }, 500);
    $('ul.menu-top a[href^="#"]').css({'color':'#212121'});
    $(this).css({'color':'#004bee'});
    return false;
 });

    // Выпадающее меню
    
$('.menu-burger').click(function(){
    $('nav').slideToggle(500);
    $('ul.menu-top').css({
      'display':'flex', 'flex-direction':'column'
    });
    if($('.menu-burger').html()=='<i class="fas fa-times"></i>') {
       $(this).html('<i class="fas fa-bars"></i>');
      } 
      else {
       $(this).html('<i class="fas fa-times"></i>');
      }
      
 });


 // Кнопка наверх

$(window).scroll(function() {
    if ($(this).scrollTop() != 0)
         $('#toTop').fadeIn();
     else
         $('#toTop').fadeOut();
 });
 $('#toTop').click(function() {
    $('body,html').animate({
       scrollTop: 0
    }, 800);
 });

});

