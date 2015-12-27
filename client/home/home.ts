/// <reference path="../../typings/tsd.d.ts"/>

Template['home'].helpers({
    ongoingIncidents: function(){
        return Utils.ongoingIncidents()
    }
});