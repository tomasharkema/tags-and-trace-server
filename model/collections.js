Incidents = new Mongo.Collection('incidents');
this.Incidents = Incidents;
Workflows = new Mongo.Collection('workflows');
this.Workflows = Workflows;
Questions = new Mongo.Collection('questions');
this.Questions = Questions;
var GpsData = (function () {
    function GpsData(lat, lon, accuracy) {
        this.lat = lat;
        this.lon = lon;
        this.accuracy = accuracy;
    }
    return GpsData;
})();
Locations = new Mongo.Collection('locations');
this.Locations = Locations;
