const controller = new ScrollMagic.Controller();

AOS.init();

const scrollspy = new VanillaScrollspy(document.querySelector('nav'));
scrollspy.init();


/** TIMELINES **/

// Greet Animation
const t = new TimelineMax();

t.from('#background', 0.5, { opacity: 1 });
t.to('#background', 1, { display: 'none'}, 0);
t.to('header', 0.5, { backgroundColor: 'white', color: 'black' , borderColor: 'rgb(236, 236, 236)'}, 0);
t.to('header a', 0.5, { color: 'black' }, 0);
t.from('#about', 0.5, { opacity: 0.5 });


// About Animation
const t_about = new TimelineMax();

t_about.to('#left-image', 0.5, { opacity: 1, x: 0 });
t_about.to('#right-image', 0.5, { opacity: 1, x: 0 }, 0);


/** SCENES **/

// Scene 1
new ScrollMagic.Scene({
    duration: 1200,
})
    .setPin('#background')
    .setTween(t)
    .addTo(controller)

// Scene 2
new ScrollMagic.Scene({
    triggerElement: '#about',
    duration: 500,

})
    .setTween(t_about)
    .addTo(controller)



// Owl Carousel
$('.party .owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
})

// Image slider
$('.gallery .owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 20,

    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
            stagePadding: 200,
        }
    },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
})


// rsvp form logic
$(document).ready(() => {

    $('#not-coming').click(() => $('.modal .content form div').slice(2, -2).hide())
    $('#coming').click(() => $('.modal .content form div').slice(2).show())

    // popup logic
    $('.rsvp-dialog').click(() => {
        $('#rsvp-modal').fadeIn()
        $('body').css({ 'overflow-y': 'hidden' });
    })

    // close modal
    $('.close-modal').click(()=>{
        $('#rsvp-modal').fadeOut()
        $('body').css({'overflow-y': 'scroll'});
        return false;
    })

})

//logo change on scroll
$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) { 
            $('.logo img').attr('src','./assets/images/J and E logo(black).png');
        }
        if ($(this).scrollTop() < 250) { 
            $('.logo img').attr('src','./assets/images/J and E logo.png');
        }
    })
});

//scroll smoothly on clinking link
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
    } 
  });
});