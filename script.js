var map = L.map('map').setView([13.0352, 77.5913], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([13.0352, 77.5913]).addTo(map)
  .bindPopup('Hebbal, Bangalore')
  .openPopup();