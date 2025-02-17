new WOW({
    animateClass: "animate__animated"
}).init();

const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('.slider-block').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.header__burger').on("click", function () {
    $('.menu').addClass('open');
});

$('.menu *').on("click", function () {
    $('.menu').removeClass('open');
});

const phoneMask = IMask($('.input-phone')[0], {mask: '+{7}(000)000-00-00'});

$('.input-post-index').on("keydown", function (e) {
    return (/[0-9]/.test(e.key) && (e.target.value.length <= 5)) || e.key === 'Backspace' || e.key === 'Delete';
});

$('.input-name, .input-country, .input-surname').on("keydown", function (e) {
    return /[А-Я, A-Z]/i.test(e.key) || e.key === 'Backspace' || e.key === 'Delete';
});

const inputArray = $('.order-info-form input');

$('.order-button').on("click", function (e) {
    let isCorrect = false;
    for (let i = 0; i < inputArray.length; i++) {
        let inputClassName = inputArray[i].classList[1];
        if (inputArray[i].value === "" && inputClassName === 'input-name') {
            alert('Введите ваше имя в поле ниже!');
            break;
        } else if (inputArray[i].value === "" && inputClassName === 'input-surname') {
            alert('Введите вашу фамилию в поле ниже!');
            break;
        } else if ((inputArray[i].value === "" || !/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(inputArray[i].value)) && inputClassName === 'input-phone') {
            alert('Введите ваш телефон в поле ниже!');
            break;
        } else if (inputArray[i].value === "" && inputClassName === 'input-country') {
            alert('Введите вашу страну проживания в поле ниже!');
            break;
        } else if ((inputArray[i].value === "" || !/\d{6}/.test(inputArray[i].value)) && inputClassName === 'input-post-index') {
            alert('Введите ваш почтовый индекс в поле ниже!');
            break;
        } else if (inputArray[i].value === "" && inputClassName === 'input-address') {
            alert('Введите ваш адрес вашего проживания в поле ниже!');
            break;
        } else {
            isCorrect = true;
        }
    }
    if (isCorrect) {
        $('.order-form__h2').fadeOut();
        $('.order-info-form *').fadeOut();
        $('.order-info-form').fadeOut(function () {
            $('.order-form').append('<div class="form-success d-flex justify-content-center align-items-center"><span class="p-5 fs-1">Спасибо за заказ. Мы свяжемся с вами в ближайшее время!</span></div>');
        });
    }
});

$(document).ready(function () {
    $('.img-ref').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
});

