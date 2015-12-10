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