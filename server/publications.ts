/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../typings/meteor/meteor.d.ts"/>
/// <reference path="../model/collections.ts"/>
/// <reference path="../model/functions.ts"/>

Meteor.publish("incidents", function() {
    return Incidents.find({});
});

Meteor.publish("workflows", function() {
    return Workflows.find({});
});

Meteor.publish("questions", function() {
    return Questions.find({});
});

Meteor.publish("ongoingIncidents", function() {
    return Utils.ongoingIncidents();
});

Meteor.publish("answers", function() {
    return Answers.find({});
});

