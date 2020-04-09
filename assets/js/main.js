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



