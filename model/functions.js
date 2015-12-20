// <reference path="collections.ts"/>
// <reference path="../typings/tsd.d.ts"/>
var Utils = (function () {
    function Utils() {
    }
    Utils.ongoingIncidents = function () {
        var today = new Date();
        var query = {
            "dateTimeStart": { $lte: today }
        };
        return Incidents.find(query, { sort: { dateTimeStart: -1 } });
    };
    Utils.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    return Utils;
})();
this.Utils = Utils;
