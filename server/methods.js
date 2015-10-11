
Meteor.methods({
    "fieldAgentLocation": function(clientId, incidentId, lat, lon) {
        console.log(clientId, incidentId, lat, lon);

        check(clientId, String);
        check(incidentId, String);
        check(lat, Double);
        check(lon, Double);

        Location.insert({
            fieldAgent: clientId,
            incidentId: incidentId,
            location:{
                lat: lat,
                lon: lon
            },
            date: new Date()
        });
    }
});
