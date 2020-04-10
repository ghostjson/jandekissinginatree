const controller = new ScrollMagic.Controller();

/** TIMELINES **/

// Greet Animation
const t = new TimelineMax();

t.from('#background', 0.5, {opacity: 1, scale: 1});
t.to('header', 0.5, {backgroundColor: 'white', color: 'black'}, 0);
t.to('header a', 0.5, {color: 'black'}, 0);
t.from('#about', 0.5, {opacity: 0.5});


// About Animation
const t_about = new TimelineMax();

t_about.to('#left-image', 0.5, {opacity: 1, x: 0});
t_about.to('#right-image', 0.5, {opacity: 1, x: 0},0);


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
.addIndicators()
.setTween(t_about)
.addTo(controller)



// Owl Carousel
$('.party .owl-carousel').owlCarousel({
    nav: true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
})

// Image slider
$('.gallery .owl-carousel').owlCarousel({
    nav: true,
    loop:true,
    margin:20,
    stagePadding: 200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
})

// const client_id = 'OdgVKzzPYXN6cljKY5A6iOga2Cb0OUX';

// const sound = new SoundCloudAudio(client_id);

// sound.resolve('https://soundcloud.com/djangodjango/first-light', function(
//   track
// ) {
//   // do smth with track object
//   // e.g. display data in a view etc.
//   console.log(track);
 
//   // once track is loaded it can be played
//   sound.play();
 
//   // stop playing track and keep silence
//   sound.pause();
// });
