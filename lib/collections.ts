
declare var Incidents: Mongo.Collection<Incident>;
Incidents = new Mongo.Collection<Incident>('incidents');
this.Incidents = Incidents;

declare var Workflows: Mongo.Collection<Workflow>;
Workflows = new Mongo.Collection<Workflow>('workflows');
this.Workflows = Workflows;

declare var Questions: Mongo.Collection<Question>;
Questions = new Mongo.Collection<Question>('questions');
this.Questions = Questions;

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
