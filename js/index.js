new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow_right',
        prevEl: '.portfolio__arrow_left',
        disabledClass: 'portfolio__arrow_disable',
    },
    breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2
            }
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            }
        }
    }
})

$('.header__contact-burger').click(() => {
    $('.header__contacts').slideToggle(400);
})

$('.present__order-btn').click(() => {
    $('.page__overlay_modal').fadeIn(400).css('display', 'flex');
})

$('.modal__close').click(() => {
    $('.page__overlay_modal').fadeOut(400);
})

let menu = document.querySelector('.menu');
let lines = document.querySelectorAll('.menu__line');

menu.addEventListener('click', () => {
    lines[0].classList.toggle('rotate-line-1');
    lines[2].classList.toggle('rotate-line-3');
    lines[1].classList.toggle('translate-line-2');
});



document.addEventListener('DOMContentLoaded', function () {
    var lang = document.documentElement.lang;
    var videoPlayer1 = document.getElementById('video-player-1');
    var videoPlayer2 = document.getElementById('video-player-2');
    var videoPlayer3 = document.getElementById('video-player-3');
    var videoPlayer4 = document.getElementById('video-player-4');
    var videoPlayer5 = document.getElementById('video-player-5');

    console.log(lang);

    if (lang === 'en-GB') {
        videoPlayer1.src = 'https://youtube.com/embed/ZHjAylBLSwk';
        videoPlayer2.src = 'https://youtube.com/embed/GyVjdls0yVA';
        videoPlayer3.src = 'https://youtube.com/embed/4a5GL4yjFs8';
        videoPlayer4.src = 'https://youtube.com/embed/wi6lJpg2Gbg';
        videoPlayer5.src = 'https://youtube.com/embed/Qngmqyhomw8';
    } else {
        videoPlayer1.src = 'https://youtube.com/embed/YnDm93YyUx0';
        videoPlayer2.src = 'https://www.youtube.com/embed/FVtr8sCh45Q';
        videoPlayer3.src = 'https://youtube.com/embed/W5f3W4lt228';
        videoPlayer4.src = 'https://www.youtube.com/embed/XqS5TQPaRHM';
        videoPlayer5.src = 'https://www.youtube.com/embed/iy_Qyz06IDc';
    }
});


<? php
$locale = get_locale();
$videoSrc1 = '';
$videoSrc2 = '';
$videoSrc3 = '';
$videoSrc4 = '';
$videoSrc5 = '';

if ($locale === 'en_GB') {
    $videoSrc1 = 'https://youtube.com/embed/ZHjAylBLSwk';
    $videoSrc2 = 'https://youtube.com/embed/GyVjdls0yVA';
    $videoSrc3 = 'https://youtube.com/embed/4a5GL4yjFs8';
    $videoSrc4 = 'https://youtube.com/embed/wi6lJpg2Gbg';
    $videoSrc5 = 'https://youtube.com/embed/Qngmqyhomw8';
} elseif($locale === 'uk') {
    $videoSrc1 = 'https://youtube.com/embed/YnDm93YyUx0';
    $videoSrc2 = 'https://www.youtube.com/embed/FVtr8sCh45Q';
    $videoSrc3 = 'https://youtube.com/embed/W5f3W4lt228';
    $videoSrc4 = 'https://www.youtube.com/embed/XqS5TQPaRHM';
    $videoSrc5 = 'https://www.youtube.com/embed/iy_Qyz06IDc';
} 
?>

<iframe loading="lazy" title="YouTube video player" src="<?php echo $videoSrc1; ?>" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<iframe title="YouTube video player" src="<?php echo $videoSrc2; ?>" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<iframe title="YouTube video player" src="<?php echo $videoSrc3; ?>" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<iframe title="YouTube video player" src="<?php echo $videoSrc4; ?>" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<iframe title="YouTube video player" src="<?php echo $videoSrc5; ?>" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

// Функция для переключения ссылок src в iframe в зависимости от языка
function switchLanguage() {
    // Получаем текущий язык страницы из атрибута lang
    var currentLanguage = document.documentElement.lang;

    // Получаем все iframe элементы на странице
    var iframes = document.querySelectorAll('iframe');

    // Обходим все iframe и меняем ссылки src в зависимости от текущего языка
    iframes.forEach(function (iframe) {
        if (currentLanguage === 'en-GB') {
            // Если текущий язык - английский, меняем src на ссылку для английского контента
            iframe.src = iframe.src.replace('https://youtube.com/embed/ZHjAylBLSwk', 'https://youtube.com/embed/GyVjdls0yVA', 'https://youtube.com/embed/4a5GL4yjFs8', 'https://youtube.com/embed/wi6lJpg2Gbg', 'https://youtube.com/embed/Qngmqyhomw8');
        } else {
            // Иначе, если текущий язык не английский, меняем src на ссылку для другого языка (если есть)
            iframe.src = iframe.src.replace('https://youtube.com/embed/YnDm93YyUx0', 'https://www.youtube.com/embed/FVtr8sCh45Q', 'https://youtube.com/embed/W5f3W4lt228', 'https://www.youtube.com/embed/XqS5TQPaRHM', 'https://www.youtube.com/embed/iy_Qyz06IDc');
        }
    });
}

// Вызываем функцию при загрузке страницы
switchLanguage();