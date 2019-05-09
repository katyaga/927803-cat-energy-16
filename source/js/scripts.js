// Меню сайта на мобилке
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Интерактивная карта
function getIconSize () {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (width < 768) {
    return [55, 53];
  } else {
    return [113, 106];
  }
}

function getPlacemark(myMap) {
  return new ymaps.Placemark([59.93875261, 30.32314838], {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Магазин "CAT ENERGY"'
  }, {
    iconImageHref: "img/map-pin.png",
    iconLayout: 'default#image',
    iconImageSize: getIconSize(),
    iconOffset: getIconSize().map(function (item) {return -0.5 * item}),
  });
}

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.93875261, 30.32314838],
    zoom: 17
  });

  myMap.geoObjects.add(getPlacemark(myMap));

  window.onresize = function(event) {
    myMap.geoObjects.removeAll();
    myMap.geoObjects.add(getPlacemark(myMap));
  };
}

// Переключение слайдов
var slider = document.querySelector(".example__list");

if(slider) {
  var active_slide = document.querySelector(".example__item--active");
  var buttons = document.querySelectorAll(".example__button");
  var button__active = document.querySelector(".example__button--active");
  var slides = document.querySelectorAll(".example__item");
  // var toggle = document.querySelector(".");

  var set_active_button = function (button) {
    if (button__active) {
      button__active.classList.remove("example__button--active");
    }
    button.classList.add("example__button--active");
    button__active = button;
  };

  var set_active_slide = function (slide) {
    if (active_slide) {
      active_slide.classList.remove("example__item--active");
    }
    slide.classList.add("example__item--active");
    active_slide = slide;
  };

  var add_click_handler = function (button, slide) {
    button.addEventListener('click', function () {
      if (button !== button__active) {
        set_active_button(button);
        set_active_slide(slide);
      }
    });
  };

  for (var i = 0; i < slides.length; i++) {
    add_click_handler(buttons[i], slides[i]);
  }
}
