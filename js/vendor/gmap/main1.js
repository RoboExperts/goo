$(function() {
    var map = new GMaps({
        el: "#map1",
        lat: 40.714353,
        lng: -74.005973,
        zoom: 16,
        zoomControl: false,
        scrollwheel: false,
        controls: false,
scrollwheel: false,
navigationControl: false,
mapTypeControl: false,
scaleControl: false,
draggable: false,
        zoomControlOpt: {
            position: "TOP_LEFT"
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        styles: [
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]

    });

    map.addMarker({
        lat: 40.714353,
        lng: -74.005973,
        icon: "images/marker.png"
    });
});
