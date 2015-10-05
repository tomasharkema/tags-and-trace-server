
ongoingIncidents = function() {
    var today = new Date();

    var query = {
        "from": { $lt: today },
        "active": true
    };

    return Incidents.find(query, { sort: { date: -1 } })
};

guid = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};