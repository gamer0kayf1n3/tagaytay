var data = JSON.parse(getCookie("cartData"))
var table2d = [["Room Type", "Start Date", "End Date","Price","Action"]]
pricing = {
    "single":700.00,
    "double":800.00,
    "triple":900.00,
    "quad":1000.00,
    "family":1200.00
  }
for (ds in data) {
    Datas = data[ds].split(" ")
    roomType = pricing[Datas[0].toLowerCase()]
    delta = ((new Date(Datas[2]) - new Date(Datas[1]))/1000/86400)+1
    
    console.log(delta)
    table2d.push([...Datas, `PHP ${delta*roomType.toLocaleString()}.00`, "delete"])

}
var toDelete;
document.getElementById("textualpart").appendChild(createTable(table2d))
function deleteHandler(e) {
  modal.style.display = "block";
  toDelete = e;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
deleteBtns = document.querySelectorAll("table tbody tr td:last-child");
for(delbtn of deleteBtns) {
  delbtn.setAttribute("class", "unselectable")
  delbtn.onclick = deleteHandler;

}

document.getElementById("delete").onclick = function () {
  toDelete.target.parentNode.style.animation = "bye 0.3s"
  var index = parseInt(
    toDelete.target
        .parentElement.getAttribute("index")
    )
    data.splice(index,1)
    setCookie("cartData", JSON.stringify(data), 365)
  setTimeout(()=>{  toDelete.target.parentNode.remove()},300)
  modal.style.display = "none";
}

//select only first delete button
document.querySelector("table tbody tr td:last-child").onclick=""
