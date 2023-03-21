for (els of document.getElementsByClassName("accobook")) {
    els.onclick = function(e) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        modal.style.position = "fixed";
        if (hasTagContext(e.target)) {
            alert(getTagContext(e.target))
        }
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
