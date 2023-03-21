//main scripts
function isSignedIn() {
    if (getCookie("signedIn") != "") {
        alert("signed in")
    } else {
        location.href = "signupform.html"
    }
}

function welcome() {
    var actions = document.getElementById("actions")
    var spanEl = document.createElement("span")
    spanEl.style.fontSize = "20px"
    spanEl.innerText = `Welcome, ${getCookie("first_name")}!`
    actions.appendChild(spanEl)
}
function onStartup() {
    if (getCookie("signedIn") != "") welcome()
}
onStartup()