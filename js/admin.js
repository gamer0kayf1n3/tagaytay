setTimeout(()=> {
    document.getElementById("intro").remove()
    document.body.style.overflowY = 'auto';
},2400)

timeEl = document.getElementById("current-time")

function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  
  setInterval(() => {
    const currentTime = getTime();
    timeEl.innerText = currentTime
  }, 1000);


sitemap = "about accommodations admin booknow cart checkout contact delicacies economical endpoint explainertemplate index learnmore privacy reviews signupform static_cart template terms test"
type="vuaxuuvvvxtvvvvvttvt"
//visitor, user, admin, unused, template
function getType(char) {
    db = {
        "v":"For Visitor","u":"For Logged In","a":"For Admin","x":"Unused","t":"Template"
    }
    return db[char]
}
sitemap = sitemap.split(" ")
sitemapcont = document.getElementById("sitemap")
i = 0
for (site of sitemap) {
    divparent = document.createElement("div")
    atag = document.createElement("a")
    atag.setAttribute("class", "pic-cont")
    atag.href = site+".html"
    
    divparent.setAttribute("class","divparent")
    //img
    imgEl = document.createElement("img")
    imgEl.src = `./thumbnails/html-ss/${site}.jpg`
    imgEl.setAttribute("class", "preview")
    divparent.appendChild(imgEl)
    //title
    spanEl = document.createElement("p")
    spanEl.innerText = site+".html"
    spanEl.setAttribute("class", "preview-title")
    divparent.appendChild(spanEl)
    //build status and sitetype (visitor, logged-in)
    spanEl2 = document.createElement("p")
    tpyout= getType(type[i])
    spanEl2.innerText = `Build Status: DONE · ${tpyout}`
    spanEl2.setAttribute("class", "preview-desc")
    divparent.appendChild(spanEl2)
    atag.appendChild(divparent)
    sitemapcont.appendChild(atag)
    i++;
}
sitemapcont.insertAdjacentHTML("beforeend",`<div style="clear:both"></div>`)

fetch('commit_history.txt')
  .then(response => response.text())
  .then(text => document.getElementById("logs").innerText = text);
