/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./model/answer.ts"/>
/// <reference path="./model/incident.ts"/>
/// <reference path="./model/LocationData.ts"/>
/// <reference path="./model/question.ts"/>
/// <reference path="./model/questionoption.ts"/>
/// <reference path="./model/workflow.ts"/>

class GpsData {
    lat: number;
    lon: number;
    accuracy: number;

    constructor(lat: number, lon: number, accuracy: number) {
        this.lat = lat;
        this.lon = lon;
        this.accuracy = accuracy;
    }
}

interface LocationDAO {
    fieldAgent: string
    incidentId: string
    location: GpsData
    date: Date
}

declare var Locations: Mongo.Collection<LocationDAO>;
Locations = new Mongo.Collection<LocationDAO>('locations');
this.Locations = Locations;
