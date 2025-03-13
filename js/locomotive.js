const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,  
    multiplier: window.innerWidth < 768 ? 1.5 : 1,
    lerp: window.innerWidth < 768 ? 0.08 : 0.05
});
