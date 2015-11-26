
Meteor.publish("incidents", function() {
    return Incidents.find({});
});

Meteor.publish("ongoingIncidents", function() {
    return Utils.ongoingIncidents();
});

Meteor.publish("answers", function() {
    return Answers.find({});
});

