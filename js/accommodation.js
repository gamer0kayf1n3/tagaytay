var before = document.getElementById("before")
var after = document.getElementById("after")
var ctxGlobal;
for (els of document.getElementsByClassName("accobook")) {
    els.onclick = function(e) {
      after.style.opacity = 0.5;
      after.readOnly = true;
      before.value=""
      after.value=""
      document.getElementById("description").innerText = ""
      document.getElementById("total").innerText = ""
        if (hasTagContext(e.target)) {
          before.min = new Date().toISOString().split("T")[0];
            //alert(getTagContext(e.target))
            header.innerText = `Booking a ${getTagContext(e.target).toProperCase()} room`
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            modal.style.position = "fixed";
            ctxGlobal = getTagContext(e.target)

        }
    }
}
var header = document.getElementById("headermod")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
before.addEventListener("input", () => {
  after.style.opacity = 1;
  after.readOnly = false;
  after.min = new Date(before.value).toISOString().split("T")[0];
})
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
after.addEventListener("input", (e) => {
  document.getElementById("description").innerText = `Booking for ${setCost(ctxGlobal) + 1} day${(setCost(ctxGlobal) + 1)>1?"s":""}`
  document.getElementById("total").innerText = `PHP ${((setCost(ctxGlobal) + 1)*price).toLocaleString()}.00`
})
// pricing
pricing = {
  "single":700.00,
  "double":800.00,
  "triple":900.00,
  "quad":1000.00,
  "family":1200.00
}

function setCost(ctx) {
  price = pricing[ctx]
  return (new Date(after.value) - new Date(before.value))/1000/86400
}

function isValidForm() {
  try {
  cartcookie = JSON.parse(getCookie("cart"))
}
  catch(e) {
    setCookie("cart", JSON.stringify([]),365)
    console.log(e)
  }
  setCookie("cart", JSON.stringify(cartcookie.push("urmom")),365)
  alert("done")
}