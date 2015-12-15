/// <reference path="../../typings/tsd.d.ts" />
///<reference path="../../model/functions.ts"/>

Template['home'].helpers({
    ongoingIncidents: Utils.ongoingIncidents()
});