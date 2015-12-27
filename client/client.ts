/// <reference path="../lib/collections.ts"/>
/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../typings/meteor/meteor.d.ts"/>

const clientId = "clientId";

Meteor.startup(function() {
    Tracker.autorun(function() {
        Meteor.subscribe("incidents");
        Meteor.subscribe("workflows");
        Meteor.subscribe("ongoingIncidents");
    });
    GoogleMaps.load();
    if (Session.get(clientId) === undefined) {
        Session.set(clientId, Random.id());
    }
});