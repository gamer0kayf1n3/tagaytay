//main scripts
function isSignedIn() {
    if (getCookie("signedIn") != "") {
        location.href="accommodations.html"
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

//admin stuff
function admin() {
    HTMLCode = `<div id="myModal" class="modal">  <div class="modal-content"> <div class="modal-header"> <span class="close">&times;</span> <h2 id="headermod">Admin Sign-in</h2> </div> <div class="modal-body"> <p id="date"></p> <form onsubmit="adminSubmit(); return false"> <label for="uname">Username: </label> <input type="text" id="uname" required><br><br> <label for="pwd">Password: </label> <input type="password" id="pwd" required><br> <div id="tocartparent"> <input class="custombutton" id="adminSubmitButton" type="submit" value="Log In"> </div> </form> </div> </div></div>`
    wrapper = document.createElement('div')
    wrapper.setAttribute("id","wrapper")
    wrapper.innerHTML = HTMLCode
    document.body.appendChild(wrapper)
    document.getElementById("myModal")
    document.getElementById("myModal").style.display = "block"
    window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("wrapper").remove()
        }
      }
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        document.getElementById("wrapper").remove()
      }
}

function adminSubmit() {
    uname = document.getElementById("uname").value
    pwd = document.getElementById("pwd").value
    if ((uname == "steven" && pwd == "ilikecats") || (uname="kyle" && pwd=="Icode")) {
        location.href="admin.html"
    } else {
        document.getElementById("wrapper").remove()
    }
}

//alert system
function showAlert(message) {
    var alertContainer = document.getElementById("alert-container");
  
    // Create a new alert element
    var alertElement = document.createElement("div");
    alertElement.classList.add("alert");
    alertElement.innerHTML = message;
  
    // Add the alert element to the container
    alertContainer.appendChild(alertElement);
  
    // Show the alert
    alertElement.classList.add("show");
  
    // Set a timeout to hide the alert after 5 seconds
    setTimeout(function() {
      alertElement.classList.remove("show");
  
      // Remove the alert element from the container after it has been hidden
      setTimeout(function() {
        alertContainer.removeChild(alertElement);
      }, 500);
    }, 5000);
  }
//<div id="alert-container"></div>
alertCont = document.createElement("div")
alertCont.setAttribute("id","alert-container")
document.body.appendChild(alertCont)