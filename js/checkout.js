receipt = document.getElementsByClassName("receipt")[0]

/*
<div class="room-info">
    <p><strong>Room Type:</strong> <span id="roomtype"></span></p>
    <p><strong>Room Rate:</strong> <span id="roomrate"></span></p>
    <p><strong>Check-in Date:</strong> <span id="indate"></span></p>
    <p><strong>Check-out Date:</strong> <span id="outdate"></span></p>
    <p><strong>Number of Days:</strong> <span id="days"></span></p>
    <p><strong>Subtotal:</strong> <span id="subtotal"></span></p>
</div>
*/

var data = JSON.parse(getCookie("cartData"))

pricing = {
    "single":700.00,
    "double":800.00,
    "triple":900.00,
    "quad":1000.00,
    "family":1200.00
  }
altnames = {
    "single":"Standard Single",
    "double":"Standard Double",
    "triple":"Standard Triple",
    "quad":"Standard Quad",
    "family":"Deluxe Family"
}
/*
//roomtype
altnames[datas[0]]
//roomrate
pricing[datas[0]]
//checkin date
new Date(datas[1])
//checkoutdate
new Date(datas[2])
//day numbers
(out - in)/1000/86400
//sub
day * roomrate
*/

for (datas of data) 
{   datas = datas.split(" ")
    roomtype = altnames[datas[0]]
    roomrate = pricing[datas[0]]
    checkind = new Date(datas[1])
    checkout = new Date(datas[2])
    daynumbs = (checkout - checkind)/1000/86400
    subtotal = daynumbs * roomrate
    receipt.insertAdjacentHTML("beforeend",
        `<div class="room-info">
        <p><strong>Room Type:</strong> ${roomtype}</p>
        <p><strong>Room Rate:</strong> ${`PHP ${(roomrate).toLocaleString()}.00`}</p>
        <p><strong>Check-in Date:</strong> ${checkind.toLocaleString('default', {weekday:"long", month: 'long', day:"numeric",year:"numeric"})}</p>
        <p><strong>Check-out Date:</strong> ${checkout.toLocaleString('default', {weekday:"long", month: 'long', day:"numeric",year:"numeric"})}</p>
        <p><strong>Number of Days:</strong> ${daynumbs}</p>
        <p><strong>Subtotal:</strong> ${`PHP ${(subtotal).toLocaleString()}.00`}</p>
    </div><hr>`
    )
}