/// <reference path="../../typings/tsd.d.ts"/>

Template['home'].helpers({
    ongoingIncidents: () => {
        return Utils.ongoingIncidents()
    },
    activity: () => {
        return Activity.forAll()
    }
});