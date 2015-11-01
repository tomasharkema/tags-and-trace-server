class Incident implements IncidentDAO {
    _id: string;
    label:string;
    dateTimeStart:Date;
    dateTimeEnd: Date;
    workflows:Array<string>;

    constructor(label:string, dateTimeStart:Date, workflows:Array<string>) {
        this.label = label;
        this.dateTimeStart = dateTimeStart;
        this.workflows = workflows;
    }
}

this.Incident = Incident;