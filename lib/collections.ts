
//Incidents = new Mongo.Collection("incidents");
//Location = new Mongo.Collection("locations");

interface IncidentDAO {
    _id?: string;
    label: string;
    dateTimeStart: Date;
    dateTimeEnd?: Date;
    workflows: Array<string>;
}

declare var Incidents: Mongo.Collection<IncidentDAO>;
Incidents = new Mongo.Collection<IncidentDAO>('incidents');