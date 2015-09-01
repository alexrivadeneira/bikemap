// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



 function alex(){
 	alert("kjdklfa");
 }

function initialize(){
	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1IjoiYWxleHJpdmFkZW5laXJhIiwiYSI6ImI5ZTZlOWY4NmUwYjFjZjg5ZjkzYTFjZjJkNGE2ODY2In0.1sttmA0ov3ht6S4SD_yJtw';
	// Create a map in the div #map
	var map = L.mapbox.map('map', 'alexrivadeneira.mkojlckm');	


// L.marker is a low-level marker constructor in Leaflet.
L.marker([37.9, -77], {
    icon: L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'bus',
        'marker-color': '#fa0'
    })
}).addTo(map);
}

var click = document.getElementById('click'),
var mousemove = document.getElementById('mousemove');

//var map = L.mapbox.map('map', 'mapbox.streets');

map.on('mousemove click', function(e) {
    console.log(e.latlng);






