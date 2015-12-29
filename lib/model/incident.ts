/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Incident extends Model {
    _id: string;
    label: string;
    dateTimeStart: Date;
    dateTimeEnd: Date;

    __name__: string = "incident";

    constructor(label: string, dateTimeStart: Date) {
        super();
        this.label = label;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeEnd = null;
    }
}

this.Incident = Incident;

declare var Incidents: Mongo.Collection<Incident>;
Incidents = new Mongo.Collection<Incident>('incidents');
this.Incidents = Incidents;