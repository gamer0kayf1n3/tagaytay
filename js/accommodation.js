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
var header = document.getElementById("headermod") //ima do something real quick brb
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

function setCost(ctx) {
  price = prices[ctx]
  return (new Date(after.value) - new Date(before.value))/1000/86400
}

function isValidForm() {
  // attempt to get cartData
  cartData = getCookie("cartData")
  if (cartData == "") {setCookie("cartData", JSON.stringify([]), 365); console.log("reset");cartData = getCookie("cartData")}
  cartData = JSON.parse(cartData)
  
  //we have successfully parsed cartData cookie, now time to add things on it!
  console.log(cartData)
  cartData.push(`${ctxGlobal} ${before.value} ${after.value}`)
  console.log(cartData)
  setCookie("cartData", JSON.stringify(cartData), 365)
  modal.style.display = "none";
  showAlert("Added to cart success!")
}

for (roomtype in prices) {
  document.getElementById(`price-${roomtype}`).innerText = `PHP ${prices[roomtype].toLocaleString()}/night`;
}