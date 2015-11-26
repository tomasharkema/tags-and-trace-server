
const clientId = "clientId";

Meteor.startup(function() {
    Tracker.autorun(function() {
        Meteor.subscribe("incidents");
        Meteor.subscribe("answers");
    });
    GoogleMaps.load();
    if (Session.get(clientId) === undefined) {
        Session.set(clientId, Random.id());
    }
});