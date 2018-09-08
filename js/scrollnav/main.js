(function($) {

    $.fn.menumaker = function(options) {

        var navmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

        return this.each(function() {
            navmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.hide().removeClass('open');
                } else {
                    mainmenu.show().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });

            navmenu.find('li ul').parent().addClass('has-sub');

            multiTg = function() {
                navmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                navmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').hide();
                    } else {
                        $(this).siblings('ul').addClass('open').show();
                    }
                });
            };

            if (settings.format === 'multitoggle') multiTg();
            else navmenu.addClass('dropdown');

            if (settings.sticky === true) navmenu.css('position', 'fixed');

            resizeFix = function() {
                if ($(window).width() > 768) {
                    navmenu.find('ul').show();
                }

                if ($(window).width() <= 768) {
                    navmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };
})(jQuery);

$(document).ready(function() {
    "use strict";

    // MENU
    $("#navmenu").menumaker({
        title: "Menu",
        format: "multitoggle"
    });


$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 500)
        $(".header-wrap").addClass("header-sticky");
    else
        $(".header-wrap").removeClass("header-sticky");
});

$(function() {
	$('a.page-scroll').bind('click', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
	scrollTop: $($anchor.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').on("click", function() {
	$('.navbar-toggle:visible').click();
});
