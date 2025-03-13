function initMap() {
  // Define the initial location (latitude and longitude)
  const myLatLng = { lat: 37.7749, lng: -122.4194 }; // San Francisco, CA

  // Create a map object and specify the DOM element for display
  const map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12, // Adjust the zoom level
  });

  // Add a marker at the initial location
  new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Welcome to our Map',
  });
}

