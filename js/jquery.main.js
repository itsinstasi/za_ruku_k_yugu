$(document).ready(function(){
	//grid
	$('#js-grid').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#js-items-main').removeClass('row').removeClass('linked');
		$("html,body").trigger("scroll");
	});
	$('#js-rows').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#js-items-main').addClass('row').removeClass('linked');
	});
	$('#js-linked').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('#js-items-main').addClass('linked').removeClass('row');
	});
	
	//stories popup
	$('.js-stories-popup-open').on('click', function(){
		$('#js-stories-popup').fadeIn(250);
		
		//скрипт создания разметки попапа
		
		
		$('#js-stories-popap-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			if((currentSlide + 1) ==  slick.slideCount){
				$('#js-stories-popap-slider').slick('slickPause');
			}
		}).on('init', function() {
			console.log('init');
			setTimeout(function() {
				$(document).find('#js-stories-popap-slider .slick-track').eq(0).focusin();
				console.log($('#js-stories-popap-slider .slick-track').eq(0));
		  	}, 500);
		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			arrows: false,
			dots: true,
			infinite: false,
			fade: true,
			pauseOnFocus: false,
			pauseOnHover: false,
			accessibility: true,
			autoplay: true,
			autoplaySpeed: 10000,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						fade: false
					}
				}
			]
		});
		
		function playPauseAutoplayFn(){
			if($('#js-stop-play-autoplay').hasClass('pause')){
				$('#js-stop-play-autoplay').add('#js-stories-popap-slider').removeClass('pause');
				$('#js-stories-popap-slider').slick('slickPlay');
			} else{
				$('#js-stop-play-autoplay').add('#js-stories-popap-slider').addClass('pause');
				$('#js-stories-popap-slider').slick('slickPause');
			}
			console.log('1');
		}
		$('#js-stop-play-autoplay').on('click', function(){
			playPauseAutoplayFn();
		});
		$('.stories-popup__slide').on('click', function(){
			playPauseAutoplayFn();
		});
		$('body').keyup(function(e) {
			if (e.which == 32) {
				e.preventDefault();
				playPauseAutoplayFn();			
			}
		});
	});
	
	//mob contacts list
//	if($(window).width() < 768){
//		$('#js-cont-list-btn').on('click', function(){
//			$('#js-cont-list').toggleClass('open');
//		});
//	}	
	
	
	$('.js-stories-popup-close').on('click', function(){
		$('#js-stories-popup').fadeOut(250);
		$('#js-stories-popap-slider').slick('unslick');
	});
	
	//tags bar fix
	if($(window).width() >= 768){
		if($('#js-tags').length){
			var winHeight = $(window).height();
			var cont = $('#ja-article-wrap');
			var tags = $('#js-tags');
			var contTop = cont.offset().top;
			var contHeight = cont.height();
			var tagsHeight = tags.height();
			if(tagsHeight < winHeight){
				$(window).on('scroll', function(){
					var windScrollTop = $(window).scrollTop();
					if((windScrollTop >= contTop - 70) && ((windScrollTop + tagsHeight) < (contTop + contHeight) )){
						tags.addClass('fix');
					} else{
						tags.removeClass('fix');
					}
				})
			}			
		}
	}
	
});
