//(function() {
//  'use strict';

//  setTimeout(function() {
//    document.querySelector('.greating_picture').classList.add('m--show');
//  }, 1000);
//})();

/////////////////////////////////////////////////////////////
//flip

//$(window).load(function() { 
//var flip = document.getElementsByClassName('flip');
//var elem = flip[0];
//elem.addEventListener('click', function(e) {
//    elem.classList.toggle('flipping');
//});
//});

$(window).load(function() {
		var flip = document.getElementsByClassName('flip');
		var elem = flip[0];
		$('.btn__auto').on('click', function(e){
			elem.classList.toggle('flipping');

});
});


//////////////////////////////////////////////////////////////////////
//Preloader-1

$(document).ready(function () {
	
	$(function () {
		var imgs = [];

		$.each($('*'), function(){
			var $this = $(this),
			background = $this.css('background-image'),
			img = $this.is('img');
			

		if (background != 'none') {
			var path = background.replace('url("', '').replace('")', '');
			imgs.push(path);
		}

		if (img) {
			var path = $this.attr('src');
			if (path) {
				imgs.push(path);
			}
		}
		});


		var percents = 1;

		for (var i = 0; i < imgs.length; i++) {
			var image = $('<img>', {
				attr: {
					src : imgs[i]
				}
			});

			image.load(function () {
				setPercents(imgs.length, percents)
				percents++;
			});
		}

		function setPercents(total, current) {
			var percent = current/total*100;

			if (percent >= 70) {
				$('.wrap__index').css('display', 'block');
			}

			$('.loader-bar').css({
				'width' : percent + '%'
			});//.text(percent + '%');
		}

	});
});

//////////////////////////////////////////////////////////////////////
//Preloader-2

$(window).load(function() { 
	$('#status').delay(1000).fadeOut(); 
	$('#preloader').delay(1000).fadeOut('slow'); 
});

//////////////////////////////////////////////////////////////////////
//Slider


$(window).load(function() {

		var counter = 1;
		$('.slider__controls-top').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					container = $this.closest('.block__slider'),
					items = container.find('.slider__item'),
					activeItem = container.find('.slider__item.active');

			var slider_info = $('.descr__work');
			var slider_info_items = slider_info.find('.slider__info-item');
			var slider_info_active = slider_info.find('.slider__info-item.active');



			if (counter >= items.length) {counter =0;}


			var reqItem = items.eq(counter),
					reqInfo = slider_info_items.eq(counter-1);
//			reqImg = items.eq(currentImg - 1).find('img');
			
			activeItem.animate({
				'top' : '100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				slider_info_active.removeClass('active');
				reqInfo.addClass('active');
				$(this).addClass('active');

			});
			counter++;
			
	});


		
		$('.slider__controls-bottom').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					container = $this.closest('.block__slider'),
					items = container.find('.slider__item'),
					activeItem = container.find('.slider__item.active');
					

			var slider_info = $('.descr__work');
			var slider_info_items = slider_info.find('.slider__info-item');
			var slider_info_active = slider_info.find('.slider__info-item.active');

			if (counter <=-items.length) {counter =0;}
			

			var reqItem = items.eq(counter);
					reqInfo = slider_info_items.eq(counter-1);
			
			activeItem.animate({
				'top' : '100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				slider_info_active.removeClass('active');
				reqInfo.addClass('active');
				$(this).addClass('active');

			});
			counter--;
	});
});


///////////////////////////////
//parallax
$(window).scroll(function(){
	var wScroll = $(window).scrollTop();

	(function(){
		var
			bg = $('.hero__bg'),
			sectionText = $('.img__header_wp'),
			user = $('.wrapper__foto');

		slideIt(bg, wScroll / 2000);
		slideIt(sectionText, wScroll / 2);
		slideIt(user, wScroll / 5);

		function slideIt(block, strafeAmount){
			var strafe = -strafeAmount + '%',
				transformString = 'translate3d(0,' + strafe + ',0)';

			block.css({
				'transform' : transformString
			});
		}
	}());
});

/////////////////////////////////////////////////////
//sidebar_blog
$(window).scroll(function(){

	var sidebar = $('.menu__side_bar');
	var section = $('.blog__aticle1');
	$(window).scroll(function(e){
		var scroll = $(window).scrollTop();

		  if(scroll > 300) {
      sidebar.css({position: "fixed", top: 50});
    }else {
      sidebar.css({position: "relative", top: 0});
    }

			section.each(function(index, elem){

				var topEdge = $(elem).offset().top - scroll;
						var bottomEdge = topEdge + $(elem).height();
//						console.log($(elem).offset().top);
//						console.log($(elem).height());
//						console.log(scroll +" :" +topEdge + ":" + bottomEdge);
	//				&& scroll < bottomEdge
					if(topEdge < 100 && bottomEdge > 100 ) {
//						console.log('yesssss ', index);
						$('.menu__side_bar a').removeClass('active');
						$('#item'+ index).addClass('active');
					}
	
			});
	});


	$('.menu__side_bar a').on('click', function(e){
			e.preventDefault(); 
			var link = $(e.target);
			var id = link.data('id');
			var top = $(section.eq(id)).offset().top;

			$(window).scrollTop(top - 350);

			$('.menu__side_bar a').removeClass('active');
			link.addClass('active');
	});
});

////////////////////////////////////////////////
//knopka_menu_krestikom_stanovitsya
$(document).ready(function() {
$(".toggle_mnu").click(function() {
	$(".sandwich").toggleClass("active");
});

$(".top__mnu ul a").click(function(){
	$(".top__mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
}).append("<span>");
});
/////////////////////////////////////////
//knopka_menu_raskrivaet_menu
$(document).ready(function() {
		$('.toggle_mnu').on('click', function(e){
			e.preventDefault();
		if ($(".top__mnu").is(":visible")) {
			$(".top__mnu").fadeOut(600);
			$(".top__mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top__mnu").fadeIn(600);
			$(".top__mnu li a").addClass("fadeInUp animated");
		};
	});
});
//////////////////////////////////////////////
//side-bar_mobile_version
$(document).ready(function() {
	$('.nav__side_bar').on('click', function(e){
		e.preventDefault();
		var link1 = $(e.target);

		$('.nav__side_bar').toggleClass('active1');


	});
});

//////////////////////////////////////////////
//skills

/*;$('#getGandom').click(function() {
  $('figure').each(function(){
    var value = Math.floor((Math.random() * 100) + 1);
    $( this ).attr( "data-percent" , value);
    alert('ff');
  });
});

*/





/*$(document).ready(function() {

  $('figure').each(function(){
    var value = Math.floor((Math.random() * 100) + 1);
    $( this ).attr( "data-percent" , value);
    


	});
});
*/
