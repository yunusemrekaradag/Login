https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
    var c = document.getElementById('pwd2');
    c.setAttribute('type', 'text');
}
function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
    var c = document.getElementById('pwd2');
    c.setAttribute('type', 'password');
    c.setAttribute('type', 'password');
}
var pwShown = 0;
document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
document.getElementById("eye2").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
function formValidation() {

    if (name.value.length < 3 || name.value.length > 24) {
        alert("Name and surname length should be more than 3 and less than 24");
        name.focus();
        return false;
    }
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        return false;
    }
    if (!password.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        password.focus();
        return false;
    }
    if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        phoneNumber.focus();
        return false;
    }
    return true;
}

