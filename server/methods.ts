
declare var Double: any;

Meteor.methods({
    "fieldAgentLocation": function(clientId, incidentId, lat, lon) {
        console.log(clientId, incidentId, lat, lon);

        check(clientId, String);
        check(incidentId, String);
        check(lat, Double);
        check(lon, Double);

        let gpsData = new GpsData(lat, lon, null);
        let location = new LocationData(clientId, incidentId, gpsData, new Date());

        Locations.insert(location);
    },
    "commitAnswer": function(value, questionId, tagRecordId) {
        console.log("commitAnswer", value, questionId, tagRecordId);
        var answer = new Answer(value, questionId, tagRecordId);
        Answers.insert(answer)
    }
});