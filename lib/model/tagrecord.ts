
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

this.GpsData = GpsData;

class TagRecord implements Nameable {
    _id: string;
    dateRecorded: Date;
    latitude: number;
    longitude: number;
    accuracy: number;
    tagId: string;
    deviceId: string;
    answers: string[];

    __name__: string = "tagrecord";

    constructor(dateRecorded:Date, latitude:number, longitude:number, accuracy:number, tagId:string, deviceId:string, answers:string[]) {
        this.dateRecorded = dateRecorded;
        this.latitude = latitude;
        this.longitude = longitude;
        this.accuracy = accuracy;
        this.tagId = tagId;
        this.deviceId = deviceId;
        this.answers = answers;
    }
}

this.TagRecord = TagRecord;

declare var TagRecords: Mongo.Collection<TagRecord>;
TagRecords = new Mongo.Collection<TagRecord>('tagrecords');
this.TagRecords = TagRecords;
