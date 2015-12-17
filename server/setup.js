Meteor.startup(function () {
    if (Incidents.find().count() === 0) {
        console.log("First run, populating db!");
        var vandaag = new Date();
        var later = new Date();
        later.setFullYear(vandaag.getFullYear() + 10);
        var incident = new Incident("Orkaan Katrina", vandaag);
        var incidentId = Incidents.insert(incident);
        var workflow = new Workflow("Algemene Kennis", incidentId);
        var workflowId = Workflows.insert(workflow);
        var workflow2 = new Workflow("Van de server", incidentId);
        var workflowId2 = Workflows.insert(workflow2);
        var question = new Question("Wat is 1+1?", null, workflowId);
        var questionId = Questions.insert(question);
        var question2 = new Question("Wat is 1+1?", null, workflowId2);
        var questionId2 = Questions.insert(question2);
    } else{
        console.log("Database has existing data");
    }
});
