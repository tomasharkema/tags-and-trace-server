
ongoingIncidents = function() {
    var today = new Date();

    var query = {
        "from": { $lt: today },
        "active": true
    };

    console.log(JSON.stringify(query));

    return Incidents.find(query)
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