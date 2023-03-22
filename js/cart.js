var data = JSON.parse(getCookie("cartData"))
var table2d = [["Room Type", "Start Date", "End Date"]]
for (ds in data) {
    table2d.push(data[ds].split(" "))
}
document.getElementById("textualpart").appendChild(createTable(table2d))