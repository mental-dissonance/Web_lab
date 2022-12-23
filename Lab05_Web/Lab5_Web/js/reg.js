var password = document.getElementById("password");
var password_second = document.getElementById("password-second");
var length = document.getElementById("length");
var upper = document.getElementById("upper");
var number = document.getElementById("number");


password.onfocus = function() {
    document.getElementById("errors").style.display = "block";;
}


password.onblur = function() {
    document.getElementById("errors").style.display = "none";
}


password.onkeyup = function() {
  
    let check1 = false;
    let check2 = false;
    let check3 = false;

    password.classList.remove("pass-standard");
    password.classList.add("pass-valid");

    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(upperCaseLetters)) {  
        upper.classList.remove("invalid");
        upper.classList.add("valid");
        check1 = true;
    } else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if(password.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
        check2 = true;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        check3 = true;
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if(check1 == true && check2 == true && check3 == true){
        password.classList.remove("pass-invalid");
        password.classList.add("pass-valid");
    }
    else{
        password.classList.remove("pass-valid");
        password.classList.add("pass-invalid");
    }
}

password_second.onkeyup = function (){
  var value_pass = password.value;
  var value_pass_sec = password_second.value;
  
  password_second.classList.remove("pass-standard");
  password_second.classList.add("pass-valid");
    if(value_pass != value_pass_sec){
        password_second.classList.remove("pass-valid");
        password_second.classList.add("pass-invalid");
    }
    else{
        password_second.classList.remove("pass-invalid");
        password_second.classList.add("pass-valid");
    }

}