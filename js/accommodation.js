for (els of document.getElementsByClassName("accobook")) {
    els.onclick = function(e) {

        if (hasTagContext(e.target)) {
            //alert(getTagContext(e.target))
            header.innerText = `Booking a ${getTagContext(e.target).toProperCase()} room`
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            modal.style.position = "fixed";

        }
    }
}
var header = document.getElementById("headermod")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
