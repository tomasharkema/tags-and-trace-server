/// <reference path="../lib/collections.ts"/>
/// <reference path="../typings/tsd.d.ts"/>
Meteor.startup(function() {
    if (Incidents.find().count() === 0) {
        console.log("LEEG!");

        var vandaag:Date = new Date();
        var later:Date = new Date();
        later.setFullYear(vandaag.getFullYear() + 10);

        let incident = new Incident("Orkaan Katrina", vandaag);
        let incidentId = Incidents.insert(incident);

        let workflow = new Workflow("Algemene Kennis", incidentId);
        let workflowId = Workflows.insert(workflow);

        let workflow2 = new Workflow("Van de server", incidentId);
        let workflowId2 = Workflows.insert(workflow2);

        let question = new Question("Wat is 1+1?", null, workflowId);
        let questionId = Questions.insert(question);

        let question2 = new Question("Wat is 1+1?", null, workflowId2);
        let questionId2 = Questions.insert(question2);
    }
});

