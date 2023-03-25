setTimeout(()=> {
    document.getElementById("intro").remove()
},2400)

dashboarbutton = document.getElementById("dashboard")
dashboard = document.getElementById("sidebar")
exitButton = document.getElementById("bye")
timeEl = document.getElementById("current-time")
dashboarbutton.onclick = function() {
    dashboard.style.display = "block"
    dashboard.style.animation = "slidein 200ms ease forwards"
}
exitButton.onclick = function() {
    dashboard.style.display = "none"
}

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
sitemap = sitemap.split(" ")
sitemapcont = document.getElementById("sitemap")
for (site of sitemap) {
    atag = document.createElement("a")
    atag.href = site+".html"
    atag.innerText = site+".html"
    sitemapcont.appendChild(atag)
}