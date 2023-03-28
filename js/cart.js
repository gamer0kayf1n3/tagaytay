var data = JSON.parse(getCookie("cartData"))
var newData = []
for (ds of data) {
  Datas = ds.split(" ")
  delta = new Date(Datas[1])
  if (delta < new Date()) {
    continue
  } else {
    newData.push(ds)
  }
}
setCookie("cartData", JSON.stringify(newData), 365)
data = newData
var table2d = [["Room Type", "Start Date", "End Date","Price","Action"]]
pricing = prices
for (ds in data) {
    Datas = data[ds].split(" ")
    roomType = pricing[Datas[0].toLowerCase()]
    delta = ((new Date(Datas[2]) - new Date(Datas[1]))/1000/86400)+1
    
    console.log(delta)
    table2d.push([...Datas, `PHP ${(delta*roomType).toLocaleString()}.00`, "delete"])

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
  getTotalSum()
}

//select only first delete button
document.querySelector("table tbody tr td:last-child").onclick=""

function getTotalSum() {
    totalEl = document.getElementById("total") //place total to var

    totalArray = []
    for (ds in data) {
        Datas = data[ds].split(" ")
        roomType = pricing[Datas[0].toLowerCase()]
        delta = ((new Date(Datas[2]) - new Date(Datas[1]))/1000/86400)+1
        totalArray.push(delta*roomType)
    }
    
    if(totalArray != []) {
/*true*/  sum = totalArray.reduce
          ((total, num) => total + (Number.isInteger(num) ? num : 0), 0); console.log("i works!!!!!!!1111")} else
/*false*/ {sum = 0;}
    totalEl.innerText = `PHP ${sum.toLocaleString()}.00`
}
getTotalSum()
