// 로고 로티
const lottie = bodymovin.loadAnimation({
    container: $('header #logo')[0],
    renderer: 'svg', 
    loop: true,
    autoplay: true,
    path: '../../source/lottie/logo.json', 
});

// 메인비주얼 패럴렉스
$(document).on('mousemove', function(e) {
    $('.main_visual .person img').each(function() {
        const pos = $(this).data('value');
        const x = (window.innerWidth - e.pageX * pos) / 90;
        const y = (window.innerHeight - e.pageY * pos) / 90;
        $(this).css('transform', `translateX(${x}px) translateY(${y}px)`);
    });
});


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
const pcS3 = $('.case3 .main_screen .screen');
const pcM3 = $('.case3 .main_screen .mask');
const mS1 = $('.case2 .main_mobile .mask .screen');
const mM1 = $('.case2 .main_mobile .mask');

// up 함수
const aniup = function(mask, screen) {
    var newH1 = mask.height();
    var newH2 = screen.height();
    var height = newH1 - newH2;
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
        pcM3.mouseenter(function() { aniup(pcM3, pcS3); });
        pcM3.mouseleave(function() { anidown(pcS3); });
        // 내려가는 화면이 제일 위에 올라와 있어야 함!! 
        mM1.mouseenter(function() { aniup(mM1, mS1); });
        mM1.mouseleave(function() { anidown(mS1); });
    }
});
