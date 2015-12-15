/// <reference path="../model/collections.ts"/>
class Utils {
    static ongoingIncidents() {
        var today = new Date();

        var query = {
            "from": { $lte: today },
            "active": true
        };

        return Incidents.find(query, { sort: { date: -1 } })
    }

    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}

this.Utils = Utils;
