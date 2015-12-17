var LocationData = (function () {
    function LocationData(fieldAgent, incidentId, location, date) {
        this.fieldAgent = fieldAgent;
        this.incidentId = incidentId;
        this.location = location;
        this.date = date;
    }
    return LocationData;
})();
