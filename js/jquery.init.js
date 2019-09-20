$(document).ready(function(){
            
	$('#js-stories-slider').slick({
    	slidesToShow: 7,
    	slidesToScroll: 7,
    	arrows: true,
    	dots: false,
    	infinite: false,
    	responsive: [
			{
    			breakpoint: 600,
    			settings: {
    				slidesToShow: 6,
					slidesToScroll: 6
    			}
    		},{
    			breakpoint: 500,
    			settings: {
    				slidesToShow: 5,
					slidesToScroll: 5
    			}
    		},{
    			breakpoint: 400,
    			settings: {
    				slidesToShow: 4,
					slidesToScroll: 4
    			}
    		},{
    			breakpoint: 359,
    			settings: {
    				slidesToShow: 3,
					slidesToScroll: 3
    			}
    		}
    	]
	});
	
	$('.js-article-slider').slick({
    	arrows: false,
    	dots: true,
		lazyLoad: 'ondemand',
		autoplay: true,
    	infinite: false
	});
});

$(function() {  
	// Default
	$('img').loadScroll();

	$('.stories').show();
});