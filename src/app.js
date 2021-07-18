// Initialize and add the map
function initMap() {
    // The location of Uluru 48.242387812111126, -122.35118074432776
    const uluru = { lat: 48.242387812111126, lng: -122.35118074432776 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

initMap();