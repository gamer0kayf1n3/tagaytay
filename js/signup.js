// when user clicks submit
//all data should be saved
// and the cookie should say that user is already signed up
var submitButton = document.getElementById("submitter")

var inputElements = document.querySelectorAll("#signupform input, select")

function logger() {
    for (el of inputElements) {
        if (el.value == "Submit") continue
        setCookie(el.name, el.value, 365)
    }
    setCookie("signedIn", 1, 365)
    location.href = "./"
}