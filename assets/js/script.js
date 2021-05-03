
$(document).ready(function(){
	$('#menu-btn').on('click', function(){
		$('.nav-menu').toggleClass("active");
	});



	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  mobileFirst: true,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  arrows:false,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});
	
$('.property-slide').slick({
	  mobileFirst: true,
          centerMode: false,
          variableWidth: false,
		responsive: [
		{
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:true
      },
    },
    {
      breakpoint: 961,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows:false
      },
    }
  ]
	});


$('.property-card').slick({
    mobileFirst: true,
          centerMode: false,
          // variableWidth: false,
    responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      },
    }
  ]
  });



$('.property-icons-slide').slick({
		infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false, // не показывать стрелки
dots: true, // показывать точки индикаторы
responsive: [
    {
      breakpoint: 961,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      },
    },
    {
      breakpoint: 339,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      },
    }
  ]
	});
$('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:true,

	  mobileFirst: true,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: false,
  });
$('.collapse').show();



$('.work-slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

});