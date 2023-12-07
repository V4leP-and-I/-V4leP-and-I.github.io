const checkbox = document.getElementById('html');
var form = document.querySelector('.header_warp2');
var warp = form.querySelector('input_all')
// var validateBtn = form.querySelector('.reg_button');
const regButton = form.querySelector('.reg_button');

var phone = form.querySelector('.phone');


checkbox.addEventListener('change', function() {
  // var txt5 = warp.querySelector('input_name').getElementById('name').value;
  // var txt1 = warp.querySelector('input_other').getElementById('phone').value;
  // var txt2 = warp.querySelector('input_other').getElementById('email').value;
  // var txt3 = warp.querySelector('input_other').getElementById('password').value;
  // var txt4 = warp.querySelector('input_other').getElementById('password2').value;
  if ((this.checked)) {
    regButton.style.opacity = '1';
  } else {
    regButton.style.opacity = '0.3';
  }
});

phone.addEventListener("keyup", function(){
  this.value = this.value.replace(/[^\d]/g, "");
});

