const checkbox = document.getElementById('html');
var form = document.querySelector('.header_warp2');
var warp = form.querySelectorAll('.input_all');
// var validateBtn = form.querySelector('.reg_button');
const regButton = form.querySelector('.reg_button');

var phone = document.querySelector('#phone');
var name = document.querySelector('#name');
var email = document.querySelector('#email');
var pass = document.querySelector('#password');
var pass2 = document.querySelector('#password2');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    regButton.style.opacity = '1';
  } else {
    regButton.style.opacity = '0.3';
  }
});

const phoneRegex = /^[\d()+ -]{4,14}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

phone.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^0-9+()+-]/g, "");
  // this.value = this.value.replace(/[^\d()+-]{4,14}$/g, "");
});

email.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^0-9+()+A-z+.+@]/g, "");
});
