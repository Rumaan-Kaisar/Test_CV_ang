/* sticky Navigation */

$(document).ready(function() {
$('.js--section-features').waypoint(function(direction) { 
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
}, {offset: '60px;'});

    
/* Scroll on button */
    
    $('.js--scrol-to-plans').click(function() { 
                                              $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
                                              });
    
    $('.js--scrol-to-start').click(function() { 
                                              $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
                                              });
    
    $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { 
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                
                $('html, body').animate({ scrollTop: target.offset().top}, 3000); 
                return false;
            }
            else {
                window.alert("hi");
            }
        }
    });
    });

    
/* Aimation on scroll */    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    }, {offset: '50%'});
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
    }, {offset: '50%'});
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn')
    }, {offset: '50%'});
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse')
    }, {offset: '50%'});

/* Aimation on scroll */  
    $('.js--nav-icon').click( function(){
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
        
        var icon = $('.js--nav-icon i'); 
        if (icon.hasClass('ion-navicon-round')) { icon.addClass('ion-close-round');
                                                  icon.removeClass('ion-navicon-round');}
        else { icon.addClass('ion-navicon-round');
               icon.removeClass('ion-close-round');}
    });
    
});




/*
var waypoints = $('#handler-first').waypoint(function(direction) { 
notify(this.element.id + ' hit 25% from top of window')
}, {
offset: '25%'
})


*/


 
                                               
                                               