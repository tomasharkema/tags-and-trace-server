
interface IncidentDAO {
    _id?: string
    label: string
    dateTimeStart: Date
    dateTimeEnd?: Date
    workflows: Array<string>
}

declare var Incidents: Mongo.Collection<IncidentDAO>;
Incidents = new Mongo.Collection<IncidentDAO>('incidents');
this.Incidents = Incidents;

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
