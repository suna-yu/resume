// 스킬바 숫자 바꾸기
const skill = document.querySelectorAll('.skill_box .text > div');
skill.forEach((el) => {
    const counter = el.querySelector('.point');
    const tg = counter.textContent;
    const tm = gsap.timeline({
        defaults: {duration: 4, ease: 'expo.out'},
        scrollTrigger: {
            trigger: el,
            toggleActions: 'play pause resume reset',
        },
    });
    tm.from(counter, {
        textContent: 0,
        modifiers: {
            textContent: (textContent) => {
                return textContent.toFixed();
            }
        }
    }),
    tm.to(el, {
        '--p': tg,
    }, 0 )
})

// 화면 안 슬라이드
const pcS1 = $('.case1 .main_screen .screen');
const pcM1 = $('.case1 .main_screen .mask');
const pcS2 = $('.case2 .main_screen .screen');
const pcM2 = $('.case2 .main_screen .mask');
const mS1 = $('.case2 .main_mobile .mask .screen');
const mM1 = $('.case2 .main_mobile .mask');
console.log(mM1, mS1);

// up 함수
const aniup = function(mask, screen) {
    var newH1 = mask.height();
    var newH2 = screen.height();
    var height = newH1 - newH2;
    console.log(height);
    gsap.to(screen, {y: height, duration: 3});
};

// down 함수
const anidown = function(screen) {
    gsap.to(screen, {y: 0, duration: 3});
};

ScrollTrigger.create({
    trigger: '.portfolio',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.5,
    onEnter: function() {
        pcM1.mouseenter(function() { aniup(pcM1, pcS1); });
        pcM1.mouseleave(function() { anidown(pcS1); });
        pcM2.mouseenter(function() { aniup(pcM2, pcS2); });
        pcM2.mouseleave(function() { anidown(pcS2); });
        // 모바일은 안 되고 있음... 왤까.
        mM1.mouseenter(function() { aniup(mM1, mS1); });
        mM1.mouseleave(function() { anidown(mS1); });
    }
});
