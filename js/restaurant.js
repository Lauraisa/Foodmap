google.maps.event.addDomListener(window, 'load', init); 
var map;
var market;
function init(){ 
  var mapOption = { 
    center: new google.maps.LatLng(-12.0981589,-77.036525), 
    zoom: 15, mapTypeId:google.maps.MapTypeId.ROADMAP 
  }; 
    map = new google.maps.Map(document.getElementById('map'),mapOption);
    var place = new google.maps.LatLng(-12.0981589,-77.036525);
  } 
   
