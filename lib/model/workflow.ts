// <reference path="../collections.ts"/>
// <reference path="../../typings/tsd.d.ts"/>

class Workflow implements Nameable {
    _id: string;
    label: string;
    incidentId: string;

    __name__: string = "workflow";

    constructor(label: string, incidentId: string) {
        this.label = label;
        this.incidentId = incidentId;
    }
}

this.Workflow = Workflow;

declare var Workflows: Mongo.Collection<Workflow>;
Workflows = new Mongo.Collection<Workflow>('workflows');
this.Workflows = Workflows;