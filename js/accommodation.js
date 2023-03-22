
for (els of document.getElementsByClassName("accobook")) {
    els.onclick = function(e) {
      document.getElementById("before").value=""
      document.getElementById("after").value=""
        if (hasTagContext(e.target)) {
          document.getElementById("before").min = new Date().toISOString().split("T")[0];
          
          
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
document.getElementById("before").addEventListener("input", () => {
  console.log("wow")
  document.getElementById("after").min = new Date(document.getElementById("before").value).toISOString().split("T")[0];
})
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// pricing
pricing = {
  "single":700.00,
  "double":800.00,
  "triple":900.00,
  "quad":1000.00,
  "family":1200.00
}