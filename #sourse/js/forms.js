/*//чтобы работала гнадпись в input 
//FORMS
function forms() {
   //FIELDS
   $('input,textarea').focus(function () {
      if ($(this).val() == $(this).attr('data-value')) {
         $(this).addClass('focus');
         $(this).parent().addClass('focus');
         if ($(this).attr('data-type') == 'pass') {
            $(this).attr('type', 'password');
         };
         $(this).val('');
      };
      removeError($(this));
   });
   $('input[data-value], textarea[data-value]').each(function () {
      if (this.value == '' || this.value == $(this).attr('data-value')) {
         if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
            $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
         } else {
            this.value = $(this).attr('data-value');
         }
      }
      if (this.value != $(this).attr('data-value') && this.value != '') {
         $(this).addClass('focus');
         $(this).parent().addClass('focus');
         if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
            $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
         }
      }

      $(this).click(function () {
         if (this.value == $(this).attr('data-value')) {
            if ($(this).attr('data-type') == 'pass') {
               $(this).attr('type', 'password');
            };
            this.value = '';
         };
      });
      $(this).blur(function () {
         if (this.value == '') {
            if (!$(this).hasClass('l')) {
               this.value = $(this).attr('data-value');
            }
            $(this).removeClass('focus');
            $(this).parent().removeClass('focus');
            if ($(this).attr('data-type') == 'pass') {
               $(this).attr('type', 'text');
            };
         };
         if ($(this).hasClass('vn')) {
            formValidate($(this));
         }
      });
   });
   $('.form-input__viewpass').click(function (event) {
      if ($(this).hasClass('active')) {
         $(this).parent().find('input').attr('type', 'password');
      } else {
         $(this).parent().find('input').attr('type', 'text');
      }
      $(this).toggleClass('active');
   });
}
forms();

//VALIDATE FORMS
$('form button[type=submit]').click(function () {
   var er = 0;
   var form = $(this).parents('form');
   var ms = form.data('ms');
   $.each(form.find('.req'), function (index, val) {
      er += formValidate($(this));
   });
   if (er == 0) {
      removeFormError(form);

      if (ms != null && ms != '') {
         showMessageByClass(ms);
         return false;
      }
   } else {
      return false;
   }
});
function formValidate(input) {
   var er = 0;
   var form = input.parents('form');
   if (input.attr('name') == 'email' || input.hasClass('email')) {
      if (input.val() != input.attr('data-value')) {
         var em = input.val().replace(" ", "");
         input.val(em);
      }
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val() == input.attr('data-value')) {
         er++;
         addError(input);
      } else {
         removeError(input);
      }
   } else {
      if (input.val() == '' || input.val() == input.attr('data-value')) {
         er++;
         addError(input);
      } else {
         removeError(input);
      }
   }
   if (input.attr('type') == 'checkbox') {
      if (input.prop('checked') == true) {
         input.removeClass('err').parent().removeClass('err');
      } else {
         er++;
         input.addClass('err').parent().addClass('err');
      }
   }
   if (input.hasClass('name')) {
      if (!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))) {
         er++;
         addError(input);
      }
   }
   if (input.hasClass('pass-2')) {
      if (form.find('.pass-1').val() != form.find('.pass-2').val()) {
         addError(input);
      } else {
         removeError(input);
      }
   }
   return er;
}
function formLoad() {
   $('.popup').hide();
   $('.popup-message-body').hide();
   $('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
   $('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms) {
   $('.popup').hide();
   popupOpen('message.' + ms, '');
}
function showMessage(html) {
   $('.popup-loading').remove();
   $('.popup-message-body').show().html(html);
}
function clearForm(form) {
   $.each(form.find('.input'), function (index, val) {
      $(this).removeClass('focus').val($(this).data('value'));
      $(this).parent().removeClass('focus');
      if ($(this).hasClass('phone')) {
         maskclear($(this));
      }
   });
}
function addError(input) {
   input.addClass('err');
   input.parent().addClass('err');
   input.parent().find('.form__error').remove();
   if (input.hasClass('email')) {
      var error = '';
      if (input.val() == '' || input.val() == input.attr('data-value')) {
         error = input.data('error');
      } else {
         error = input.data('error');
      }
      if (error != null) {
         input.parent().append('<div class="form__error">' + error + '</div>');
      }
   } else {
      if (input.data('error') != null && input.parent().find('.form__error').length == 0) {
         input.parent().append('<div class="form__error">' + input.data('error') + '</div>');
      }
   }
   if (input.parents('.select-block').length > 0) {
      input.parents('.select-block').parent().addClass('err');
      input.parents('.select-block').find('.select').addClass('err');
   }
}
function addErrorByName(form, input__name, error_text) {
   var input = form.find('[name="' + input__name + '"]');
   input.attr('data-error', error_text);
   addError(input);
}
function addFormError(form, error_text) {
   form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form) {
   form.find('.form__generalerror').hide().html('');
}
function removeError(input) {
   input.removeClass('err');
   input.parent().removeClass('err');
   input.parent().find('.form__error').remove();

   if (input.parents('.select-block').length > 0) {
      input.parents('.select-block').parent().removeClass('err');
      input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
      //input.parents('.select-block').find('.select-options').hide();
   }
}
function removeFormErrors(form) {
   form.find('.err').removeClass('err');
   form.find('.form__error').remove();
}

//чтобы работала гнадпись в input 

*/

function _is_hidden(el) {
   return (el.offsetParent === null)
}

let forms = document.querySelectorAll('form');
if (forms.length > 0) {
   for (let index = 0; index < forms.length; index++) {
      const el = forms[index];
      el.addEventListener('submit', form_submit);
   }
}
function form_submit(e) {
   let btn = event.target;
   let form = btn.closest('form');
   let message = form.getAttribute('data-message');
   let error = form_validate(form);
   if (error == 0) {
      //SendForm
      form_clean(form);
      if (message) {
         popup_open('message-' + message);
         e.preventDefault();
      }
   } else {
      let form_error = form.querySelectorAll('._error');
      if (form_error && form.classList.contains('_goto-error')) {
         _goto(form_error[0], 1000, 50);
      }
      event.preventDefault();
   }
}
function form_validate(form) {
   let error = 0;
   let form_req = form.querySelectorAll('._req');
   if (form_req.length > 0) {
      for (let index = 0; index < form_req.length; index++) {
         const el = form_req[index];
         if (!_is_hidden(el)) {
            error += form_validate_input(el);
         }
      }
   }
   return error;
}
function form_validate_input(input) {
   let error = 0;
   let input_g_value = input.getAttribute('data-value');

   if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
      if (input.value != input_g_value) {
         let em = input.value.replace(" ", "");
         input.value = em;
      }
      if (email_test(input) || input.value == input_g_value) {
         form_add_error(input);
         error++;
      } else {
         form_remove_error(input);
      }
   } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
      form_add_error(input);
      error++;
   } else {
      if (input.value == '' || input.value == input_g_value) {
         form_add_error(input);
         error++;
      } else {
         form_remove_error(input);
      }
   }
   return error;
}
function form_add_error(input) {
   input.classList.add('_error');
   input.parentElement.classList.add('_error');

   let input_error = input.parentElement.querySelector('.form__error');
   if (input_error) {
      input.parentElement.removeChild(input_error);
   }
   let input_error_text = input.getAttribute('data-error');
   if (input_error_text && input_error_text != '') {
      input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
   }
}
function form_remove_error(input) {
   input.classList.remove('_error');
   input.parentElement.classList.remove('_error');

   let input_error = input.parentElement.querySelector('.form__error');
   if (input_error) {
      input.parentElement.removeChild(input_error);
   }
}
function form_clean(form) {
   let inputs = form.querySelectorAll('input,textarea');
   for (let index = 0; index < inputs.length; index++) {
      const el = inputs[index];
      el.parentElement.classList.remove('_focus');
      el.classList.remove('_focus');
      el.value = el.getAttribute('data-value');
   }
   let checkboxes = form.querySelectorAll('.checkbox__input');
   if (checkboxes.length > 0) {
      for (let index = 0; index < checkboxes.length; index++) {
         const checkbox = checkboxes[index];
         checkbox.checked = false;
      }
   }
   let selects = form.querySelectorAll('select');
   if (selects.length > 0) {
      for (let index = 0; index < selects.length; index++) {
         const select = selects[index];
         const select_default_value = select.getAttribute('data-default');
         select.value = select_default_value;
         select_item(select);
      }
   }
}
// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
//    const element = viewPass[index];
//    element.addEventListener("click", function (e) {
//       if (element.classList.contains('_active')) {
//          element.parentElement.querySelector('input').setAttribute("type", "password");
//       } else {
//          element.parentElement.querySelector('input').setAttribute("type", "text");
//       }
//       element.classList.toggle('_active');
//    });
// }

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
   if (inputs.length > 0) {
      for (let index = 0; index < inputs.length; index++) {
         const input = inputs[index];
         const input_g_value = input.getAttribute('data-value');
         input_placeholder_add(input);
         if (input.value != '' && input.value != input_g_value) {
            input_focus_add(input);
         }
         input.addEventListener('focus', function (e) {
            if (input.value == input_g_value) {
               input_focus_add(input);
               input.value = '';
            }
            if (input.getAttribute('data-type') === "pass") {
               input.setAttribute('type', 'password');
            }
            if (input.classList.contains('_date')) {
               /*
               input.classList.add('_mask');
               Inputmask("99.99.9999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
               */
            }
            if (input.classList.contains('_phone')) {
               //'+7(999) 999 9999'
               //'+38(999) 999 9999'
               //'+375(99)999-99-99'
               input.classList.add('_mask');
               Inputmask("+375 (99) 9999999", {
                  //"placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            if (input.classList.contains('_digital')) {
               input.classList.add('_mask');
               Inputmask("9{1,}", {
                  "placeholder": '',
                  clearIncomplete: true,
                  clearMaskOnLostFocus: true,
                  onincomplete: function () {
                     input_clear_mask(input, input_g_value);
                  }
               }).mask(input);
            }
            form_remove_error(input);
         });
         input.addEventListener('blur', function (e) {
            if (input.value == '') {
               input.value = input_g_value;
               input_focus_remove(input);
               if (input.classList.contains('_mask')) {
                  input_clear_mask(input, input_g_value);
               }
               if (input.getAttribute('data-type') === "pass") {
                  input.setAttribute('type', 'text');
               }
            }
         });
         if (input.classList.contains('_date')) {
            datepicker(input, {
               customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
               customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
               formatter: (input, date, instance) => {
                  const value = date.toLocaleDateString()
                  input.value = value
               },
               onSelect: function (input, instance, date) {
                  input_focus_add(input.el);
               }
            });
         }
      }
   }
}
function input_placeholder_add(input) {
   const input_g_value = input.getAttribute('data-value');
   if (input.value == '' && input_g_value != '') {
      input.value = input_g_value;
   }
}
function input_focus_add(input) {
   input.classList.add('_focus');
   input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
   input.classList.remove('_focus');
   input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
   input.inputmask.remove();
   input.value = input_g_value;
   input_focus_remove(input);
}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
   for (let index = 0; index < quantityButtons.length; index++) {
      const quantityButton = quantityButtons[index];
      quantityButton.addEventListener("click", function (e) {
         let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
         if (quantityButton.classList.contains('quantity__button_plus')) {
            value++;
         } else {
            value = value - 1;
            if (value < 1) {
               value = 1
            }
         }
         quantityButton.closest('.quantity').querySelector('input').value = value;
      });
   }
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;