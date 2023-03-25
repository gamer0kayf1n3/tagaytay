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