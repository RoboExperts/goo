(function($)
{
	"use strict"

	/* Event - Window Scroll */
	$(window).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= 90 )
		{
			$('.header').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header').removeClass("navbar-fixed-top");
		} // set sticky menu - end		

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});

	/* Event - Window Scroll /- */
	$('#back-to-top').on('click', function()
	{
		// When arrow is clicked
		$('body,html').animate(
		{
			scrollTop : 0 // Scroll to top of body
		},800);
	});
	
	/* .introduction-section */
	$('.introduction-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.introduction-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.introduction-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.introduction-section > .section-header > .description').addClass('animated slideInRight');
			$('.introduction-section > .container > .tab-system > .iphone').addClass('animated fadeInRight');
			$('.introduction-section > .container > .tab-system > .col-md-7').addClass('animated fadeInLeft');
		});
	});
	/* .about-section section-header */
	$('.about-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.about-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.about-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.about-section > .section-header > .description').addClass('animated slideInRight');
			$('.about-section > .call-us > .container > .call-us-title').addClass('animated slideInRight');
		});
	});
	/* .service-section section-header */
	$('.service-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.service-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.service-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.service-section > .section-header > .description').addClass('animated slideInRight');
		});
	});
	
	/* Featured Section */
	$('.featured-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.featured-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.featured-section > .section-header > .description').addClass('animated slideInRight');
			$('.featured-section > .container > .iphone').addClass('animated slideInRight');
			$('.featured-section > .container > .tab-system').addClass('animated slideInLeft');
		});
	});
	
	/* .team-member-section section-header */
	$('.team-member-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.team-member-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.team-member-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.team-member-section > .section-header > .description').addClass('animated slideInRight');
		});
	});
	/* .portfolio-section section-header */
	$('.portfolio-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.portfolio-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.portfolio-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.portfolio-section > .section-header > .description').addClass('animated slideInRight');
		});
	});
	/* .client-testimonial-section section-header */
	$('.client-testimonial-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.client-testimonial-section > .section-header > .section-title').addClass('animated fadeInLeft');
			$('.client-testimonial-section > .section-header > .description').addClass('animated slideInRight');
		});
	});
	/* .about-section section-header */
	$('.about-section > .why-choose-us > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			
			$('.about-section > .why-choose-us > .section-header > .section-title').addClass('animated fadeInUp');
			$('.about-section > .why-choose-us > .section-header > .description').addClass('animated slideInRight');
		});
	});
	/*skill section */
	$('.skill-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");
		
		$this.appear(function()
		{
			$('#photoshop-skill').animateNumber({ number: 95 }, 2000);
			$('#html-css-skill').animateNumber({ number: 80 }, 2000);
			$('#wordpress-skill').animateNumber({ number: 75 }, 2000);
			$('#javascript-skill').animateNumber({ number: 70 }, 2000);
			$('.skill-section > .container > .col-md-7 > .our-skill-description').addClass('animated slideInRight');
			$('.skill-section > .container > .col-md-5').addClass('animated fadeInUp');
		});
	});
	$('.dial').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");		

		$this.appear(function()
		{
			// alert(myVal);
			$this.knob({ });
			$({ value: 0 }).animate({ value: myVal },
			{
				duration: 2000,
				easing: 'swing',
				step: function ()
				{
					$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
		});
	});	
	/* Trainer Single Template - Loading Circle /- */
	
	/* .pricing-section section-header */
	$('.pricing-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.pricing-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.pricing-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.pricing-section > .container > .col-md-3 > .price-inner-section').addClass('animated fadeInDown');
		});
	});	
	
	/* .contact-section section-header */
	$('.contact-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.contact-section > .section-header > .section-sub-title').addClass('animated slideInLeft');
			$('.contact-section > .section-header > .section-title').addClass('animated fadeInDown');
			$('.contact-section > .section-header > .description').addClass('animated slideInRight');
		});
	});	
	$('.contact-section > .contact-information').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.contact-section > .contact-information > .phone-number-icon').addClass('animated slideInLeft');
			$('.contact-section > .contact-information > .phone-number').addClass('animated fadeInDown');
			$('.contact-section > .contact-information > .company-name').addClass('animated slideInRight');
			$('.contact-section > .contact-information > .address').addClass('animated slideInLeft');
			$('.contact-section > .contact-information > .email-contact').addClass('animated fadeInRight');
			$('.contact-section > .contact-information > .social').addClass('animated fadeInUp');
		});
	});
	
	/* .time-line-section section-header */
	$('.time-line-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{			
			$('.time-line-section> .section-header > .section-title').addClass('animated fadeInDown');
			$('.time-line-section > .section-header > .description').addClass('animated slideInRight');
		});
	});	
	
	$('.time-line-section > .container > .timeline').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{			
			$('.time-line-section > .container > .timeline > .odd').addClass('animated fadeInLeft');
			$('.time-line-section > .container > .timeline > .even').addClass('animated fadeInRight');
		});
	});
	
	/* call-to-action */
	$('.call-to-action').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.call-to-action > .container > .call-action-subtitle').addClass('animated slideInLeft');
			$('.call-to-action > .container > .call-action-title').addClass('animated fadeInDown');
			$('.call-to-action > .container > .call-action-description').addClass('animated slideInRight');
		});
	});
	
	$('.about-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.about-section > .container > .call-action-subtitle').addClass('animated slideInLeft');			
		});
	});
	
	/* Set-up Animation Effect */
	$('.our-fact-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('#project-finished').animateNumber({ number: 167 }, 2000);
			$('#awards-won').animateNumber({ number: 25 }, 2000);
			$('#proposals-sent').animateNumber({ number: 209 }, 2000);
			$('#hours-of-work').animateNumber({ number: 4500 }, 2000);
		});
	});
	
	/* Team Member Section */
	$('.team-member-section > .container > [class*="col-"]').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.team-member-section > .container > [class*="col-"]').addClass('animated fadeInRight');
		});
	});
	
	/* Our Template Section */
	$('.team-member-section > .container > [class*="col-"]').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.our-template-section > .container > .template-title').addClass('animated fadeInDown');
			$('.our-template-section > .container > .description').addClass('animated fadeInLeft');
			$('.our-template-section > .container > .purchase-now').addClass('animated fadeInRight');
		});
	});
	
	/* work section */
	$('.work-section > img').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.work-section > img').addClass('animated fadeInDown');
		});
	});
	
	$('.work-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.work-section > .section-header').addClass('animated fadeInRight');
		});
	});
	
	/* Event - Document Ready /- */	
	$(document).ready(function($)
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$('.header').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header').removeClass("navbar-fixed-top");
		} // set sticky menu - end

		$('.navbar-nav li a, .logo-block a').bind('click', function(event)
		{
			var anchor = $(this);

			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 72 }, 1500, 'easeInOutExpo' );					
				}
				event.preventDefault();
			}
		});

		$('.goto-next a').bind('click', function(event)
		{
			var anchor = $(this);

			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 150 }, 1500, 'easeInOutExpo' );					
				}
				event.preventDefault();
			}
		});

		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
		// $(".header").css("height", window_height + "px");
		
		$("#client-testimonials").owlCarousel(
		{
			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			navigation : true,
			pagination: false
		});
		
		$("#partners").owlCarousel(
		{
			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 5,
			itemsDesktop : [1199,5],
			itemsDesktopSmall : [979,5],
			navigation : false,
			pagination: true
		});

		$("#default" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/default.css");
			return false;
		});
		
		$("#green" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/green.css");
			return false;
		});
		
		$("#red" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/red.css");
			return false;
		});
		
		$("#yellow" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/yellow.css");
			return false;
		});

		$("#light-green" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/light-green.css");
			return false;
		});

		$("#orange" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/orange.css");
			return false;
		});

		$("#pink" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/pink.css");
			return false;
		});

		$("#black" ).on('click', function()
		{
			$("#color" ).attr("href", "css/color-schemes/black.css");
			return false;
		});

		// picker buttton
		$(".picker_close").on('click', function()
		{
			$("#choose_color").toggleClass("position");
		});

		if($('.portfolio-section').length)
		{
			$('#portfolio,#portfolio1,#portfolio2,#portfolio3,#portfolio4,#portfolio5').magnificPopup({
				delegate: 'a',
				type: 'image',
				image: {
				  cursor: null,
				  titleSrc: 'title'
				},
				gallery: {
				  enabled: true,
				  preload: [0,1], // Will preload 0 - before current, and 1 after the current image
				  navigateByImgClick: true
				}
			});
		}

		$('.dial').val($('.dial').val() + '%');	
	});
	/* document.ready /- */

	/* Event - Window Resize /- */
	$(window).resize(function()
	{
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
		// $(".header").css("height", window_height + "px");
	});
	/* Event - Window Resize /- */

	var $itemsHolder = $('.portfolio-list');
	var $itemsClone = $itemsHolder.clone(); 
	var $filterClass = "";
	$('.portfolio-categories li').click(function(e)
	{
		e.preventDefault();
		$filterClass = $(this).attr('data-value');
		if($filterClass == 'all')
		{
			var $filters = $itemsClone.find('li');
		}
		else
		{
			var $filters = $itemsClone.find('li[data-type='+ $filterClass +']');
		}
		$itemsHolder.quicksand(
		$filters,
		{
			duration: 1000
		});
	});
	
	$('#photos-slider').superslides({
		animation: 'fade',
		pagination: true
	});
	
	var wow = new WOW(
	{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true        // act on asynchronously loaded content (default is true)
	});
	wow.init();

	/* ###################################### Popup Map ###################################### */

	if($('#map').length)
	{
		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
		google.maps.event.addDomListener(window, 'resize', init);

		$('a#supramap').on('click', function()
		{
			$('#map').addClass('frontoff');
			$('#close-map').addClass('sub-down');
		});		 

		$('a#close-map-top').on('click', function()
		{
			$('#map').removeClass('frontoff');
			$('#close-map').removeClass('sub-down');
			$('#main-future').removeClass("fadeOut").addClass("fadeIn");
		});
	}

	function init()
	{
		var myLatlng = new google.maps.LatLng(49.6122021,6.1324549,17);

		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			draggable: false,

			// The latitude and longitude to center the map (always required)
			center: myLatlng,
			
			// How you would like to style the map. 
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
				stylers:[
				{
					hue:'#ff1a00'
				},
				{
					invert_lightness:true
				},
				{
					saturation:-100
				},
				{
					lightness:33
				},
				{
					gamma:0.5
				}]
			},
			{
				featureType:'water',
				elementType:'geometry',
				stylers:[{ color:'#2D333C' }]
			}]
		};

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
		var contentString = '<div class="info-content"><h1 class="info-h1">We are here <small>28, Rue du Nord @ Luxembourg</small></h1><p>Located in the center of the city, lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum euismod erat, nec porta turpis fringilla sed. Morbi euismod metus sagittis, gravida orci id, tincidunt odio. Pellentesque habitant morbi tristique.</p></div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

	if (!$('html').is('.ie6, .ie7, .ie8'))
	{
		/* Event - Window Load */
		$(window).load(function()
		{		
			/* Loader */
			$("#site-loader").delay(1000).fadeOut("slow");
		});
		/* Event - Window Load /- */
	}
	else
	{
		$("#site-loader").css('display','none');
	}

})(jQuery);
