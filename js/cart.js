var data = JSON.parse(getCookie("cartData"))
var table2d = [["Room Type", "Start Date", "End Date","Price"]]
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
    delta = (new Date(Datas[2]) - new Date(Datas[1]))/1000/86400
    
    console.log(delta)
    table2d.push([...Datas, `PHP ${delta*roomType.toLocaleString()}.00`])
}
document.getElementById("textualpart").appendChild(createTable(table2d))

