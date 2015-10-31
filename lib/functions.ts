class Utils {
    static ongoingIncidents() {
        var today = new Date();

        var query = {
            "from": { $lt: today },
            "active": true
        };

        return Incidents.find(query, { sort: { date: -1 } })
    }
}

