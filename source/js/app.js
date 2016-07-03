//(function() {
//  'use strict';

//  setTimeout(function() {
//    document.querySelector('.greating_picture').classList.add('m--show');
//  }, 1000);
//})();


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
			}).text(percent + '%');
		}

	});
});

//////////////////////////////////////////////////////////////////////
//Preloader-2

$(window).load(function() { 
	$('#status').delay(3000).fadeOut(); 
	$('#preloader').delay(3000).fadeOut('slow'); 
});

//////////////////////////////////////////////////////////////////////
//Slaider


$(window).load(function() { 

		var counter = 1;
		$('.slider__controls-top').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					container = $this.closest('.wrap__work'),
					items = container.find('.slider__item'),
					activeItem = container.find('.slider__item.active');
					

			if (counter >= items.length) {counter =0;}
			console.log(counter);

			var reqItem = items.eq(counter);
			
			activeItem.animate({
				'top' : '100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');

			});
			counter++;
	});


		
		$('.slider__controls-bottom').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
					container = $this.closest('.wrap__work'),
					items = container.find('.slider__item'),
					activeItem = container.find('.slider__item.active');
					

			if (counter <=-items.length) {counter =0;}
			console.log(counter);

			var reqItem = items.eq(counter);
			
			activeItem.animate({
				'top' : '100%'
			}, 300);
			reqItem.animate({
				'top' : '0%'
			}, 300, function () {
				activeItem.removeClass('active').css('top', '-100%');
				$(this).addClass('active');

			});
			counter--;
	});
});


