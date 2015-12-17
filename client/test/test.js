
const centerLat = 52.4513141;
const centerLon = 4.8095458000000235;
const testCurrentLocation = "testCurrentLocation";
const testCurrentIncident = "testCurrentIncident";

Meteor.startup(function() {
    if (Session.get(testCurrentLocation) === undefined) {
        Session.set(testCurrentLocation, {
            lat: centerLat,
            lon: centerLon
        });
    }
});


GoogleMaps.ready('locationTestMap', function(map) {

    var testLocation = Session.get(testCurrentLocation);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(testLocation.lat, testLocation.lon),
        map: map.instance,
        title: 'Hello World!',
        draggable: true
    });

    google.maps.event.addListener(marker, "dragend", function() {
        var position = marker.getPosition();
        Session.set(testCurrentLocation, {
            lat: position.J,
            lon: position.M
        });
    });
});

Template.testLocation.helpers({
    incidents: function(){
        return ongoingIncidents()
    },
    exampleMapOptions: function() {
        if (GoogleMaps.loaded()) {
            var testLocation = Session.get(testCurrentLocation);
            return {
                center: new google.maps.LatLng(testLocation.lat, testLocation.lon),
                zoom: 12
            };
        }
    },
    currentLocation: function() {
        return Session.get(testCurrentLocation);
    },
    currentIncident: function() {

    }
});

Template.testLocation.events({
   "click .testMap": function() {
       var location = Session.get(testCurrentLocation);
       Meteor.call("location", Session.get("clientId"), Session.get(testCurrentIncident), location.lat, location.lon);
   },
    "change #selectedIncident": function(event) {
        Session.set(testCurrentIncident, event.target.value);
    }
});