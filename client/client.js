
const clientId = "clientId";

Meteor.startup(function() {
    Tracker.autorun(function() {
        Meteor.subscribe("incidents");
    });
    GoogleMaps.load();
    if (Session.get(clientId) === undefined) {
        Session.set(clientId, Random.id());
    }
});