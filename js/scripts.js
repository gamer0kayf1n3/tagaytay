//main scripts
function isSignedIn() {
    if (getCookie("signedIn") != "") {
        alert("u wer signed in yay!")
    } else {
        alert("bruh... redirecting to signup website")
        location.href = "signupform.html"
    }
}