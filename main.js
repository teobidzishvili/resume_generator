
var sakheli = document.getElementById("sakheli")
var gvari = document.getElementById("gvari")
var name_label = document.getElementById("name-label")
var gvari_label = document.getElementById("gvari_label")
var name_error = document.getElementById("name_error")
var surname_error = document.getElementById("surname_error")

// Regular expression to match Georgian letters
var regEx = /^[\u10A0-\u10FF]+$/

sakheli.addEventListener("input", function() {
    
    if (!regEx.test(sakheli.value) || sakheli.value.length<2) {

        sakheli.classList.add("border-3", "border-danger")
        name_label.classList.add("text-danger")
        name_error.classList.remove("d-none")
        return false;
    }else{
        sakheli.classList.remove("border-3", "border-danger")
        name_label.classList.remove("text-danger")
        name_error.classList.add("d-none")
        return true;
    }
})

gvari.addEventListener("input", function(){
    if (!regEx.test(gvari.value) || gvari.value.length<2) {
        gvari.classList.add("border-3", "border-danger")
        gvari_label.classList.add("text-danger")
        surname_error.classList.remove("d-none")
        return false;
    }else{
        gvari.classList.remove("border-3", "border-danger")
        gvari_label.classList.remove("text-danger")
        surname_error.classList.add("d-none")
        return true;
    }
})

var email = document.getElementById("email")
var email_label = document.getElementById("email_label")
var email_error = document.getElementById("email_error")

email.addEventListener("input", function() {
    if (!email.value.endsWith("@redberry.ge")) {
        email_error.classList.remove("d-none")
        email_label.classList.add("text-danger")
        email.classList.add("border-3", "border-danger")
        return false
    } else {
        email_error.classList.add("d-none")
        email_label.classList.remove("text-danger")
        email.classList.remove("border-3", "border-danger")
        return true
    }
})

var phone_number = document.getElementById("phone_number");
var phone_label = document.getElementById("phone_label");
var phone_error = document.getElementById("phone_error");

phone_number.addEventListener("input", function() {
    var phoneRegEx = /^\+995\d{9}$/;

    if (!phoneRegEx.test(phone_number.value)) {
        phone_error.classList.remove("d-none");
        phone_label.classList.add("text-danger");
        phone_number.classList.add("border-3", "border-danger");
        return false
    } else {
        phone_error.classList.add("d-none");
        phone_label.classList.remove("text-danger");
        phone_number.classList.remove("border-3", "border-danger");
        return true
    }
});
