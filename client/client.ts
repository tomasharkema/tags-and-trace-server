/// <reference path="../model/collections.ts"/>
/// <reference path="../typings/tsd.d.ts"/>

const clientId = "clientId";

Meteor.startup(function() {
    Tracker.autorun(function() {
        Meteor.subscribe("incidents");
        Meteor.subscribe("answers");
        Meteor.subscribe("workflows");
        Meteor.subscribe("questions");
    });
    GoogleMaps.load();
    if (Session.get(clientId) === undefined) {
        Session.set(clientId, Random.id());
    }
});