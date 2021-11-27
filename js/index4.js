/* Variables */
const mapContainer = document.getElementById("map");
var rootMapUrl = "https://www.google.com/maps/search/?api=1&query=";
var latitude = "";
var longitude = "";
/* Window Onload Call */
window.onload = getLocation();
/* Functions */
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(createMap);
  }else{ 
    alert("Geolocation is not supported by this browser.");
  }
}

function createMap(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude; 
    mapContainer.setAttribute("src",rootMapUrl+latitude+","+longitude);
}