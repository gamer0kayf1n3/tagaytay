//Functions to cycle through images in main page

//used to keep track of which images in the array to show
var currentIndex = 0;

//
var offer1 = document.getElementById("offer1");
var images1 = ["static/mainpage/buffet1.jpg", "static/mainpage/buffet2.jpg", "static/mainpage/buffet3.jpg"]; 


var offer2 = document.getElementById("offer2");
var images2 = ["static/mainpage/service1.jpg", "static/mainpage/service2.jpg", "static/mainpage/service3.jpg"]; 

var offer3 = document.getElementById("offer3");
var images3 = ["static/mainpage/pool1.jpg", "static/mainpage/pool2.jpg", "static/mainpage/pool3.jpg"]; 

function changeBackground() {
  offer1.style.backgroundImage = "url('" + images1[currentIndex] + "')";
  offer2.style.backgroundImage = "url('" + images2[currentIndex] + "')";
  offer3.style.backgroundImage = "url('" + images3[currentIndex] + "')";
  currentIndex = (currentIndex + 1) % 3;
}

setInterval(changeBackground, 2000); 