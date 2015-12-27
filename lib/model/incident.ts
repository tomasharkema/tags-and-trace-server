/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Incident {
    _id: string;
    label:string;
    dateTimeStart:Date;
    dateTimeEnd: Date;

    constructor(label: string, dateTimeStart: Date) {
        this.label = label;
        this.dateTimeStart = dateTimeStart;
    }
}

this.Incident = Incident;

declare var Incidents: Mongo.Collection<Incident>;
Incidents = new Mongo.Collection<Incident>('incidents');
this.Incidents = Incidents;