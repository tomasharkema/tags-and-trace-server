
Meteor.publish("incidents", function() {
    return Incidents.find({});
});

Meteor.publish("ongoingIncidents", function() {
    return Utils.ongoingIncidents();
});