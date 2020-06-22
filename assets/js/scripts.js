function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if (element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if ($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({
			scrollTop: scroll_to
		}, 1000);
	}
}


jQuery(document).ready(function () {
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function (e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function () {
		$('nav').toggleClass('navbar-no-bg');
	});

	/* Slick slider*/

	$('.product-slider').slick({
		dots: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		speed: 600,
		fade: true,
		centerMode: true,
	});

	$('.artist-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 6,
		adaptiveHeight: true,
		variableWidth: true,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/***Scroll Magic***/

	//init
	var controller = new ScrollMagic.Controller();

	//get all triggers  - headers of all section
	var texts = ["#slide01 .container", "#slide02 .container", "#slide03 .container"];

	//Scene 1
	texts.forEach(function (text, index) {
		var num = index + 1;
		console.log(text)
		console.log('#slide0' + num);
		//create scene 
		var textScene = new ScrollMagic.Scene({
				triggerElement: text,
				duration: 1000,
				offset: 50
			})
			.setClassToggle('#slide0' + num, 'is-active')
			.addTo(controller);
	})
	//Scene 2
	var textScene2 = new ScrollMagic.Scene({
			triggerElement: '#slide04',
			duration: 1000,
			offset: -200
		})
		.setClassToggle('#slide04', 'is-active')
		.addTo(controller);
	//Deal
	var imgDealScene = new ScrollMagic.Scene({
			triggerElement: '.top-content',
			duration: 700,
			offset: 10
		})
		.setClassToggle('.dealImg', 'show')
		.addTo(controller);

	//Product
	var imgProductScene = new ScrollMagic.Scene({
			triggerElement: '.product-container',
			duration: 1200,
			offset: 100

		})
		.setClassToggle('.productImg', 'show')
		.addTo(controller);

	//Product Spike
	var imgProductSpikeScene = new ScrollMagic.Scene({
			triggerElement: '.product-container',
			duration: 1200,
			offset: 100

		})
		.setClassToggle('.fadeSpike', 'spikeShow')
		.addTo(controller);

	//Product Slide
	var slideProductScene = new ScrollMagic.Scene({
			triggerElement: '.product-container',
			duration: 1200,
			offset: 100

		})
		.setClassToggle('.productSlide', 'slideRight')
		.addTo(controller);


	//Artist
	var imgArtistScene = new ScrollMagic.Scene({
			triggerElement: '.artist-container',
			duration: 1300,
			offset: 100

		})
		.setClassToggle('.artistImg', 'show')
		.addTo(controller);
	//Artist Slide
	var slideArtistScene = new ScrollMagic.Scene({
			triggerElement: '.artist-container',
			duration: 1200,
			offset: 100

		})
		.setClassToggle('.artistSlide', 'slideRight')
		.addTo(controller);

	//redeem
	var imgRedeemScene = new ScrollMagic.Scene({
			triggerElement: '.redeem-container',
			duration: 900,
			offset: 100

		})
		// .addIndicators({
		// 	colorTrigger: "white",
		// 	colorStart: "white",
		// 	colorEnd: "white",
		// 	indent: 40
		//   })
		.setClassToggle('.redeemImg', 'show')
		.addTo(controller);

	//redeem Slide
	var slideRedeemScene = new ScrollMagic.Scene({
			triggerElement: '.redeem-container',
			duration: 1200,
			offset: 100

		})
		.setClassToggle('.redeemSlide', 'slideRight')
		.addTo(controller);
});


jQuery(window).load(function () {


});