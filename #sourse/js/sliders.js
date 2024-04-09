console.log('подключен файл слайдер');
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
   for (let index = 0; index < sliders.length; index++) {
      let slider = sliders[index];
      if (!slider.classList.contains('swiper-bild')) {
         let slider_items = slider.children;
         if (slider_items) {
            for (let index = 0; index < slider_items.length; index++) {
               let el = slider_items[index];
               el.classList.add('swiper-slide');
            }
         }
         let slider_content = slider.innerHTML;
         let slider_wrapper = document.createElement('div');
         slider_wrapper.classList.add('swiper-wrapper');
         slider_wrapper.innerHTML = slider_content;
         slider.innerHTML = '';
         slider.appendChild(slider_wrapper);
         slider.classList.add('swiper-bild');
      }
      if (slider.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   sliders_bild_callback();
}

function sliders_bild_callback(params) { }





if (document.querySelector('.mainslider')) {// строчка проверка на существование meinslider
   let mainslider = new Swiper('.mainslider__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.mainslider__dotts',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows
      /*
      navigation: {
         nextEl: '.about__more .more__item_next',
         prevEl: '.about__more .more__item_prev',
      },
      */
      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });






}

if (document.querySelector('.items-slider-1')) {
   let itemsslider = new Swiper('.items-slider__body-1', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-1',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.swiper-button-next-1',
         prevEl: '.swiper-button-prev-1',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}

if (document.querySelector('.items-slider-2')) {
   let itemsslider_2 = new Swiper('.items-slider__body-2', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-2',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.swiper-button-next-2',
         prevEl: '.swiper-button-prev-2',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}

if (document.querySelector('.items-slider-3')) {
   let itemsslider_2 = new Swiper('.items-slider__body-3', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-3',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.swiper-button-next-3',
         prevEl: '.swiper-button-prev-3',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}

if (document.querySelector('.items-slider-4')) {
   let itemsslider_2 = new Swiper('.items-slider__body-4', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-4',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.swiper-button-next-4',
         prevEl: '.swiper-button-prev-4',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}

if (document.querySelector('.items-slider-5')) {
   let itemsslider_2 = new Swiper('.items-slider__body-5', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-5',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.swiper-button-next-5',
         prevEl: '.swiper-button-prev-5',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}

if (document.querySelector('.items-slider-6')) {
   let itemsslider_2 = new Swiper('.items-slider__body-6', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-6',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.swiper-button-next-6',
         prevEl: '.swiper-button-prev-6',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}



if (document.querySelector('.slider-page')) {
   let sliderpage = new Swiper('.slider-page__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      breakpoints: {
         900: {
            slidesPerView: 4,

         },
         700: {
            slidesPerView: 3,

         },
         600: {
            slidesPerView: 2,

         },
         200: {
            slidesPerView: 1,

         },


      },
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      /*pagination: {
         el: '.products-page__slider-doots',
         clickable: true,
      },*/

      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.slider-page-next',
         prevEl: '.slider-page-prev',
      },




      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}


if (document.querySelector('.slider-product')) {
   let slider__product = new Swiper('.slider-product__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      breakpoints: {
         1600: {
            slidesPerView: 4,

         },
         1320: {
            slidesPerView: 3,

         },
         600: {
            slidesPerView: 2,

         },
         200: {
            slidesPerView: 1,

         },


      },

      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      /*pagination: {
         el: '.products-page__slider-doots',
         clickable: true,
      },*/

      keyboard: {
         // Включить\выключить
         enabled: false,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.slider-product-next',
         prevEl: '.slider-product-prev',
      },

      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}


if (document.querySelector('.card-product__slider')) {
   let slider__product = new Swiper('.card-product__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      /*breakpoints: {
         900: {
            slidesPerView: 4,

         },
         700: {
            slidesPerView: 3,

         },
         600: {
            slidesPerView: 2,

         },
         200: {
            slidesPerView: 1,

         },


      },
      */
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      /*pagination: {
         el: '.products-page__slider-doots',
         clickable: true,
      },*/

      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.card-product-next',
         prevEl: '.card-product-next',
      },

      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}












/*
new Swiper('.test-slider', {
   grabCursor: true,
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   navigation: {
      nextEl: '.test-slider-next',
      prevEl: '.test-slider-prev',
   },
   nested: true,
});
*/



//BildSlider
//BildSlider
let sliders_1 = document.querySelectorAll('._swiper_1');
if (sliders_1) {
   for (let index = 0; index < sliders_1.length; index++) {
      let slider_1 = sliders_1[index];
      if (!slider_1.classList.contains('swiper-bild')) {
         let slider_items_1 = slider_1.children;
         if (slider_items_1) {
            for (let index = 0; index < slider_items_1.length; index++) {
               let el_1 = slider_items_1[index];
               el_1.classList.add('swiper-slide');
            }
         }
         let slider_content_1 = slider_1.innerHTML;
         let slider_wrapper_1 = document.createElement('div');
         slider_wrapper_1.classList.add('swiper-wrapper');
         slider_wrapper_1.innerHTML = slider_content_1;
         slider_1.innerHTML = '';
         slider_1.appendChild(slider_wrapper_1);
         slider_1.classList.add('swiper-bild');
      }
      if (slider_1.classList.contains('_gallery')) {
         //slider.data('lightGallery').destroy(true);
      }
   }
   sliders_bild_callback_1();
}

function sliders_bild_callback_1(params) { }



if (document.querySelector('.test-slider')) {
   let test__slider = new Swiper('.test-slider__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      /*breakpoints: {
         900: {
            slidesPerView: 4,

         },
         700: {
            slidesPerView: 3,

         },
         600: {
            slidesPerView: 2,

         },
         200: {
            slidesPerView: 1,

         },


      },
      */
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      /*pagination: {
         el: '.products-page__slider-doots',
         clickable: true,
      },*/

      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.test-slider-next',
         prevEl: '.test-slider-prev',
      },

      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}

if (document.querySelector('.items-slider')) {
   let itemsslider = new Swiper('.items-slider__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      //loop: true,

      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
         el: '.items-slider__dotts-1',
         clickable: true,
      },
      keyboard: {
         // Включить\выключить
         enabled: true,
         // Включить\выключить
         // только когда слайдер
         // в пределах вьюпорта
         onlyInViewport: true,
         // Включить\выключить
         // управление клавишами
         // pageUp, pageDown
         pageUpDown: true,
      },
      // Arrows

      navigation: {
         nextEl: '.test-slider-next',
         prevEl: '.test-slider-prev',
      },

      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      on: {
         lazyImageReady: function () {
            ibg();
         },

      }
      // And if we need scrollbar
      //scrollbar: {
      //	el: '.swiper-scrollbar',
      //},
   });
}