const pc = document.querySelector('.portfolio .main_screen');
const mobile = document.querySelector('.portfolio .main_mobile'); 
const pcS = document.querySelector('.portfolio .main_screen .screen');
const pcM = document.querySelector('.portfolio .main_screen .mask');
const mobileS = document.querySelector('.portfolio .main_mobile .screen');
const mobileM = document.querySelector('.portfolio .main_mobile .mask');
const left = document.querySelector('.portfolio .port')

// up 
const aniup = (mask, screen) => {
    let newH1 = mask.clientHeight; 
    let newH2 = screen.clientHeight;
    let height = newH1 - newH2;
    gsap.to(screen, {y: height,
        duration: 1,
    })
};

// down 
const anidown = (screen) => {
    gsap.to(screen, {
        y: 0,
        duration: 1,
    })
};

ScrollTrigger.create({
    trigger: '.portfolio',
    start: 'top bottom',
    end: 'bottom top',
    markers: true, 
    scrub: 0.5,
    onEnter: () => {
        pcM.addEventListener('mouseenter', () => {aniup(pcM, pcS)});
        pcM.addEventListener('mouseleave', () => {anidown(pcS)});
        mobileM.addEventListener('mouseenter', () => {aniup(mobileM, mobileS)});
        mobileM.addEventListener('mouseleave', () => {anidown(mobileS)});

        gsap.fromTo(left, 
            { xPercent: -100 }, 
            { xPercent: 0, duration: 1 }
        ); //옆에서 등장하기 
    }
})