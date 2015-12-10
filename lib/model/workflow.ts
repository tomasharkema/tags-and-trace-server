class Workflow {
    _id: string;
    label: string;
    incidentId: string;

    constructor(label: string, incidentId: string) {
        this.label = label;
        this.incidentId = incidentId;
    }
}

this.Workflow = Workflow;