receipt = document.getElementsByClassName("receipt")[0]

/*
<div class="room-info">
    <span><strong>Room Type:</strong> <span id="roomtype"></span></span>
    <span><strong>Room Rate:</strong> <span id="roomrate"></span></span>
    <span><strong>Check-in Date:</strong> <span id="indate"></span></span>
    <span><strong>Check-out Date:</strong> <span id="outdate"></span></span>
    <span><strong>Number of Days:</strong> <span id="days"></span></span>
    <span><strong>Subtotal:</strong> <span id="subtotal"></span></span>
</div>
*/

var data = JSON.parse(getCookie("cartData"))

pricing = prices;
altnames = {
        "single": "Standard Queen",
        "double": "Standard King",
        "triple": "Luxury Queen",
        "quad": "Luxury Double Queen",
        "family": "Luxury Double King"
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

for (datas of data) {
    datas = datas.split(" ")
    roomtype = altnames[datas[0]]
    roomrate = pricing[datas[0]]
    checkind = new Date(datas[1])
    checkout = new Date(datas[2])
    daynumbs = (checkout - checkind) / 1000 / 86400
    subtotal = daynumbs * roomrate
    receipt.insertAdjacentHTML("beforeend",
            `<div class="room-info">
        <strong>Room Type:</strong><span class="right"> ${roomtype}</span><br>
        <strong>Room Rate:</strong><span class="right"> ${`PHP ${(roomrate).toLocaleString()}.00`}</span><br>
        <strong>Check-in Date:</strong><span class="right"> ${checkind.toLocaleString('default', {weekday:"long", month: 'long', day:"numeric",year:"numeric"})}</span><br>
        <strong>Check-out Date:</strong><span class="right"> ${checkout.toLocaleString('default', {weekday:"long", month: 'long', day:"numeric",year:"numeric"})}</span><br>
        <strong>Number of Days:</strong><span class="right"> ${daynumbs}</span><br>
        <strong>Subtotal:</strong><span class="right"> ${`PHP ${(subtotal).toLocaleString()}.00`}</span><br>
    </div><hr>`
    )
}

fullName = `${getCookie("first_name")} ${getCookie("middle_initial")} ${getCookie("last_name")} ${getCookie("suffix")}`
email = getCookie("email")
cc = getCookie("cc_number")
zc = getCookie("zip_code")

document.getElementById("fullname").innerText = fullName
document.getElementById("useremail").innerText = email
document.getElementById("ccnumber").innerText = `########${cc.substr(cc.length - 4)}`
document.getElementById("zipcode").innerText = zc