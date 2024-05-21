//ibg======================================================

function ibg() {
   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}
ibg();
//ibg======================================================



//красивая открыашка==========================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideDown = (target, duration = 500) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none')
      display = 'block';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideToggle = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
}
//красивая открыашка==========================================
//========================================
//открытие/закрытие меин меню================================


//открытие/закрытие бургера================================



//Select=================
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
   selects_init();
}
function selects_init() {
   for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      select_init(select);
   }
   //select_callback();
   document.addEventListener('click', function (e) {
      selects_close(e);
   });
   document.addEventListener('keydown', function (e) {
      if (e.which == 27) {
         selects_close(e);
      }
   });
}
function selects_close(e) {
   const selects = document.querySelectorAll('.select');
   if (!e.target.closest('.select')) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_body_options = select.querySelector('.select__options');
         select.classList.remove('_active');
         _slideUp(select_body_options, 100);
      }
   }
}
function select_init(select) {
   const select_parent = select.parentElement;
   const select_modifikator = select.getAttribute('class');
   const select_selected_option = select.querySelector('option:checked');
   select.setAttribute('data-default', select_selected_option.value);
   select.style.display = 'none';

   select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

   let new_select = select.parentElement.querySelector('.select');
   new_select.appendChild(select);
   select_item(select);
}
function select_item(select) {
   const select_parent = select.parentElement;
   const select_items = select_parent.querySelector('.select__item');
   const select_options = select.querySelectorAll('option');
   const select_selected_option = select.querySelector('option:checked');
   const select_selected_text = select_selected_option.text;
   const select_type = select.getAttribute('data-type');

   if (select_items) {
      select_items.remove();
   }

   let select_type_content = '';
   if (select_type == 'input') {
      select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
   } else {
      select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
   }

   select_parent.insertAdjacentHTML('beforeend',
      '<div class="select__item">' +
      '<div class="select__title">' + select_type_content + '</div>' +
      '<div class="select__options">' + select_get_options(select_options) + '</div>' +
      '</div></div>');

   select_actions(select, select_parent);
}
function select_actions(original, select) {
   const select_item = select.querySelector('.select__item');
   const select_body_options = select.querySelector('.select__options');
   const select_options = select.querySelectorAll('.select__option');
   const select_type = original.getAttribute('data-type');
   const select_input = select.querySelector('.select__input');

   select_item.addEventListener('click', function () {
      let selects = document.querySelectorAll('.select');
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_body_options = select.querySelector('.select__options');
         if (select != select_item.closest('.select')) {
            select.classList.remove('_active');
            _slideUp(select_body_options, 100);
         }
      }
      _slideToggle(select_body_options, 100);
      select.classList.toggle('_active');
   });

   for (let index = 0; index < select_options.length; index++) {
      const select_option = select_options[index];
      const select_option_value = select_option.getAttribute('data-value');
      const select_option_text = select_option.innerHTML;

      if (select_type == 'input') {
         select_input.addEventListener('keyup', select_search);
      } else {
         if (select_option.getAttribute('data-value') == original.value) {
            select_option.style.display = 'none';
         }
      }
      select_option.addEventListener('click', function () {
         for (let index = 0; index < select_options.length; index++) {
            const el = select_options[index];
            el.style.display = 'block';
         }
         if (select_type == 'input') {
            select_input.value = select_option_text;
            original.value = select_option_value;
         } else {
            select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
            original.value = select_option_value;
            select_option.style.display = 'none';
         }
      });
   }
}
function select_get_options(select_options) {
   if (select_options) {
      let select_options_content = '';
      for (let index = 0; index < select_options.length; index++) {
         const select_option = select_options[index];
         const select_option_value = select_option.value;
         if (select_option_value != '') {
            const select_option_text = select_option.text;
            select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
         }
      }
      return select_options_content;
   }
}
function select_search(e) {

   let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
   let select_search_text = e.target.value.toUpperCase();

   for (let i = 0; i < select_options.length; i++) {
      let select_option = select_options[i];
      let select_txt_value = select_option.textContent || select_option.innerText;
      if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
         select_option.style.display = "";
      } else {
         select_option.style.display = "none";
      }
   }
}
function selects_update_all() {
   let selects = document.querySelectorAll('select');
   if (selects) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         select_item(select);
      }
   }
}
//Select=================

//открытие/закрытие поиска===============================
// let searchSelect = document.querySelector('.search-header__content');
// let categorySearch = document.querySelector('.categories-search');
// searchSelect.addEventListener("click", function (e) {
//    searchSelect.classList.toggle('_active');
//    categorySearch.classList.toggle('_active');
//    //_slideToggle(categorySearch);
// });

//открытие/закрытие поиска===============================

//открытие/закрытие меин меню============================


//открытие/закрытие меин меню============================

//=================
//Tabs


let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   let tabs_blocks = tab.querySelectorAll("._tabs-block");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');
         }
         tabs_item.classList.add('_active');
         tabs_blocks[index].classList.add('_active');
         e.preventDefault();
      });
   }
}
//=================




//spollers=================================
let spollers = document.querySelectorAll("._spoller");
if (spollers.length > 0) {
   for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
         if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
            return false;
         }
         if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
            return false;
         }
         if (spoller.closest('._spollers').classList.contains('_one')) {
            let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
            for (let i = 0; i < curent_spollers.length; i++) {
               let el = curent_spollers[i];
               if (el != spoller) {
                  el.classList.remove('_active');
                  _slideUp(el.nextElementSibling);
               }
            }
         }
         spoller.classList.toggle('_active');
         _slideToggle(spoller.nextElementSibling);
      });
      //открытие боквых штук
      //Spollers
   }
}

//spollers=================================

const buttons = document.querySelectorAll('.size-product__item')
let btn_basket = document.querySelector('.page-product__btn');
for (let i = 0; i < buttons.length; i++) {
   buttons[i].onclick = function () {
      [...buttons].forEach((el) => el.classList.remove('_active')); //убираем класс
      this.classList.add('_active');
      btn_basket.textContent = 'добавить';
   }
}

const informationFormDateItem = document.querySelectorAll('.information-form__date-item')
for (let i = 0; i < informationFormDateItem.length; i++) {
   informationFormDateItem[i].onclick = function () {
      [...informationFormDateItem].forEach((el) => el.classList.remove('_active'));
      this.classList.add('_active');

   }
}

const informationFormTimeItem = document.querySelectorAll('.information-form__time-item')
for (let i = 0; i < informationFormTimeItem.length; i++) {
   informationFormTimeItem[i].onclick = function () {
      [...informationFormTimeItem].forEach((el) => el.classList.remove('_active'));
      this.classList.add('_active');
      pageDeliveryDate.textContent = 'Привезти сюда';
   }
}



//открытие каталога 
let buttonCatalog = document.querySelector('.top-header__catalog');
let submenuShow = document.querySelector('.category-menu');
buttonCatalog.addEventListener("click", function (e) {
   buttonCatalog.classList.toggle('_active');
   submenuShow.classList.toggle('_active');
   //_slideToggle(categorySearch);
});


//открытие каталога 



// //noislider=================================
// const priceSlider = document.querySelector('.price-filter');
// if (priceSlider) {
//    noUiSlider.create(priceSlider, {
//       start: [0, 200000],
//       connect: true,
//       //tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
//       tooltips: true,
//       range: {
//          'min': [0],
//          'max': [200000]
//       }
//    });



//    //синие кружочки 
//    const priceStart = document.getElementById('price-start');
//    const priceEnd = document.getElementById('price-end');
//    priceStart.addEventListener('change', setPriceValues);
//    priceEnd.addEventListener('change', setPriceValues);
//    //синие кружочки 

//    //генерация оранжевых кружков и окошек 
//    function setPriceValues() {
//       let priceStartValue;
//       let priceEndValue;
//       if (priceStart.value != '') {
//          priceStartValue = priceStart.value;
//       }
//       if (priceEnd.value != '') {
//          priceEndValue = priceEnd.value;
//       }
//       priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
//    }
//    //генерация оранжевых кружков и окошек 
// }
// //noislider=================================


//ползунки=================================================
const priceSlider = document.querySelector('.price-filter__slider');

noUiSlider.create(priceSlider, {
   start: [0, 200000],
   connect: true,
   //tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
   tooltips: [true, true],
   range: {
      'min': [0],
      'max': [200000]
   }
});

//оранжевые кружочки 
const priceStart = document.getElementById('price-start');
const priceEnd = document.getElementById('price-end');
priceStart.addEventListener('change', setPriceValues);
priceEnd.addEventListener('change', setPriceValues)

//генерация оранжевых кружков и окошек 
function setPriceValues() {
   let priceStartValue;
   let priceEndValue;
   if (priceStart.value != '') {
      priceStartValue = priceStart.value
   }
   if (priceEnd.value != '') {
      priceEndValue = priceEnd.value
   }
   priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
}

//генерация оранжевых кружков и окошек 

//ползунки=================================================
