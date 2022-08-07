// 1.Получаем все картинки, кнопки переключения и отображение текущего/общего номера слайда
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    //2.Создаём переменную, которая будет хранить в себе индекс слайда
    let slideIndex = 1;

    //3.Создание функции, которая показывает и скрывает слайды
    function showSlides(n) {
        if (n > slides.length) {            //С последнего слайда переходим на первый
            slideIndex = 1;
        }

        if (n < 1) {                        //С первого слайда переходим на последний
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none'); //Скрываем все слайды
        slides[slideIndex - 1].style.display = 'block';      //Отображаем по умолчанию первый слайд

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    };

    //4.Создание функции, которая будет изменять slideIndex
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    //5.Назначение обработчиков событий на prev и next
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    //6.Инициализируем слайдер и на этапе инициализации меняем отображение общего номера слайдов
    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }
    