/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class LocationData implements LocationDAO {
    fieldAgent:string;
    incidentId:string;
    location:GpsData;
    date:Date;

    constructor(fieldAgent:string, incidentId:string, location:GpsData, date:Date) {
        this.fieldAgent = fieldAgent;
        this.incidentId = incidentId;
        this.location = location;
        this.date = date;
    }
}