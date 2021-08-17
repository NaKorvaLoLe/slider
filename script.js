
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.getElementsByClassName("project__item");
    let dots = document.getElementsByClassName("project__arrows__point-slider");
    let tabs = document.getElementsByClassName("project__tab");
    let contents = document.getElementsByClassName("project__content");
    let contentsMobile = document.getElementsByClassName("project__content-mobile");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    // Функция для присвоения display:none
    function styleNone(item){
        for (i = 0; i < item.length; i++) {
            item[i].style.display = "none";
        }
    }
    styleNone(slides);
    styleNone(contents);
    styleNone(contentsMobile);

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" project__arrows__point-slider-active", " ");
    }
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" project__tab_active", " ");    
    }
    slides[slideIndex - 1].style.display = "block";
    contents[slideIndex - 1].style.display = "grid";
    contentsMobile[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " project__arrows__point-slider-active";
    tabs[slideIndex - 1].className += " project__tab_active"
}
