
Meteor.publish("incidents", function() {
    return Incidents.find({});
});

