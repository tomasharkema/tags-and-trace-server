
Meteor.methods({
    "location": function(clientId, incidentId, lat, lon) {
        console.log(clientId, incidentId, lat, lon);
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
