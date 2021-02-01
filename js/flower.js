$(document).ready(function(){

	'use strict'
	
	$(".home").height($(window).height());
	$(window).resize(function(){
		$(".home").height($(window).height());
	})
	
	
	$(window).scroll(function(){
		$('.block').each(function(){	
			var sro = $(window).scrollTop();
			var off= $(this).offset().top -=50;		
			if(sro > off){
				var blockId = '.' + $(this).attr('id');
				$('.navbar-nav li a').removeClass('link-active');
				$('.navbar-nav li a[data-scroll="'+blockId+'"]').addClass('link-active');
			}
		})

		if($(window).scrollTop()>300){
			$('.swip-up').css('display', 'inline')
		}
		else{
			$('.swip-up').css('display', 'none')
		}
	})

	$('.swip-up').click(function(){
		$('html, body').animate({
			scrollTop: $('.home').offset().top
		  }, 800)
	})
	$('.home .navbar button').on('click',function(){
        $('.home .navbar button i').toggleClass('fas fa-bars').toggleClass('fas fa-window-close');   
    })
	$('.navbar-nav li a').click(function(e){
		e.preventDefault(); 
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
		}, 1000)
		$(this).addClass('link-active').parents().siblings().children('a').removeClass('link-active');
		
	}) 
	$('.shop .bottom .view, .blog .other-blog .other .card .card-body a, .blog .item .card .card-body .end a').click(function(e){
		e.preventDefault(); 
	})

	$('.home .navbar .icon li:nth-of-type(3)').click(function(){
		$('.home .navbar .icon input[type=text]').animate({
			width: '130px',
			display: 'inline'
		},1000)
	})
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	$(function() {  
        $("body").niceScroll({
            cursorcolor: '#8e8e8e',
            cursorwidth: '8px',
            cursorborder: 'none',
            cursorborderradius: '8px',
            zindex: '100'
        });
	});

	new WOW().init();

})


