var markersData = [
  {
      lat: 37.7760,
      lng: -121.9702,
      name: "Access Metals Trading Inc.",
      address1:"2258 Camino Ramon",
      address2: "San Ramon, CA 94583",
      phoneNumber: "(925) 242-0202" // don’t insert comma in the last item of each marker
   },
   {
      lat: 37.7715,
      lng: -121.9928,
      name: "Waste Management",
      address1:"2401 Crow Canyon Rd",
      address2: "San Ramon, CA 94583",
      phoneNumber: "(925) 837-3356" // don’t insert comma in the last item of each marker
   },
   {
      lat: 37.7790,
      lng: -121.9808,
      name: "The Junk Project",
      address1:"2411-O Old Crow Canyon Rd",
      address2: "San Ramon, CA 94583",
      phoneNumber: "(925) 800-3370" // don’t insert comma in the last item of each marker
   },
   {
      lat: 37.773015,
      lng: -121.9557,
      name: "RePlanet",
      address1:"2505 San Ramon Valley Blvd",
      address2: "San Ramon, CA 94583",
      phoneNumber: "(800) 969-2020" // don’t insert comma in the last item of each marker
   },
   {
      lat: 37.7773,
      lng: -121.9808,
      name: "Junk Pros",
      address1:"136 Canyon Lakes Way",
      address2: "San Ramon, CA 94582",
      phoneNumber: "(925) 968-9001" // don’t insert comma in the last item of each marker
   },
   {
      lat: 37.7036,
      lng: -121.9026,
      name: "eWasteDirect",
      address1:"2505 San Ramon Valley Blvd",
      address2: "Dublin, CA 94568",
      phoneNumber: "(877) 437-9558" // don’t insert comma in the last item of each marker
   },
   {
      lat: 37.6709,
      lng: -121.8640,
      name: "Wastexperts Inc",
      address1:"440 Boulder Ct #200",
      address2: "Pleasanton, CA 94566",
      phoneNumber: "(925) 484-4422" // don’t insert comma in the last item of each marker
   }
];
var map, infoWindow;

// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds and zoom level according to markers position
   var bounds = new google.maps.LatLngBounds();

   // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var phoneNumber = markersData[i].phoneNumber;

      createMarker(latlng, name, address1, address2, phoneNumber);

      // Marker’s Lat. and Lng. values are added to bounds variable
      bounds.extend(latlng);
   }

   // Finally the bounds variable is used to set the map bounds
   // with API’s fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and sets their Info Window content
function createMarker(latlng, name, address1, address2, phoneNumber){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the infowindow content is created
   // and the infowindow is opened
   google.maps.event.addListener(marker, 'click', function() {

      // Variable to define the HTML content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title">' + name + '</div>' +
      '<div class="iw_content">' + address1 + '<br />' +
      address2 + '<br />' +
      phoneNumber + '</div></div>';

      // including content to the infowindow
      infoWindow.setContent(iwContent);

      // opening the infowindow in the current map and at the current marker location
      infoWindow.open(map, marker);
   });
}

function initAutocomplete() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;
  //start finding user
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Your location.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

   // a new Info Window is created
   infowindow = new google.maps.InfoWindow();

   // Event that closes the InfoWindow with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infowindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);
