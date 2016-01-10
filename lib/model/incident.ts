/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Incident implements Nameable {
    _id: string;
    label: string;
    dateTimeStart: Date;
    dateTimeEnd: Date;

    __name__: string = "incident";

    constructor(label: string, dateTimeStart: Date, dateTimeEnd?: Date) {
        this.label = label;
        this.dateTimeStart = dateTimeStart;
        this.dateTimeEnd = dateTimeEnd;
    }

}

this.Incident = Incident;

declare var Incidents: Mongo.Collection<Incident>;
Incidents = new Mongo.Collection<Incident>('incidents');
this.Incidents = Incidents;