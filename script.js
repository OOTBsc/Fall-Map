function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(40, -45),
      zoom: 2,
      navigationControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
          elementType: 'geometry',
          stylers: [{
            color: '#ebe3cd'
          }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#523735'
          }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#f5f1e6'
          }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#c9b2a6'
          }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#dcd2be'
          }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#ae9e90'
          }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#93817c'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#a5b076'
          }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#447530'
          }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            color: '#f5f1e6'
          }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{
            color: '#fdfcf8'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{
            color: '#f8c967'
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#e9bc62'
          }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [{
            color: '#e98d58'
          }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#db8555'
          }]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#806b63'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#8f7d77'
          }]
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#ebe3cd'
          }]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{
            color: '#dfd2ae'
          }]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#91cac5'
          }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#92998d'
          }]
        }
      ]
        });

    var infoWindow = new google.maps.InfoWindow({maxWidth: 200});

    for (var i = 0; i < beings.length; i++) {
        var data = beings[i]
        var latLng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'assets/icon/feather.png',
            animation: google.maps.Animation.DROP,
            title: data.title
        });

        var details = "<strong>Being:</strong> " + data.Being + "<br><strong>Date:</strong> " + data.Date +"<br><strong>Location:</strong> " + data.Location + "<br><strong>Physical Appearance:</strong> " + data.PhysicalAppearance + "<br><strong>Height: </strong>" + data.Height + "<br><strong>Wingspan: </strong>" + data.Wingspan + "<br><strong>Additional Information: </strong>" + data.AdditionalInfo;
        bindInfoWindow(marker, map, infoWindow, details);
    }
}

function bindInfoWindow(marker, map, infoWindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(strDescription);
        infoWindow.open(map, marker);
    });
}
