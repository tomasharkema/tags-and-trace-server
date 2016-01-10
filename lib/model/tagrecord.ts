
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
    location: GpsData;
    tagId: string;
    deviceId: string;
    answerIds: string[];

    __name__: string = "tagrecord";


    constructor(dateRecorded:Date, location:GpsData, tagId:string, deviceId:string, answerIds:string[]) {
        this.dateRecorded = dateRecorded;
        this.location = location;
        this.tagId = tagId;
        this.deviceId = deviceId;
        this.answerIds = answerIds;
    }
}

this.TagRecord = TagRecord;

declare var TagRecords: Mongo.Collection<TagRecord>;
TagRecords = new Mongo.Collection<TagRecord>('tagrecords');
this.TagRecords = TagRecords;
