/// <reference path="../lib/collections.ts"/>
/// <reference path="../typings/tsd.d.ts"/>
Meteor.startup(function() {
    if (Incidents.find().count() === 0) {
        console.log("First run, populating db!");

        var vandaag:Date = new Date();
        var later:Date = new Date();
        later.setFullYear(vandaag.getFullYear() + 10);

        let incident = new Incident("Orkaan Katrina", vandaag);
        let incidentId = Incidents.insert(incident);

        let workflow = new Workflow("Persoon gevonden", incidentId);
        let workflowId = Workflows.insert(workflow);

        let workflow2 = new Workflow("Object gevonden", incidentId);
        let workflowId2 = Workflows.insert(workflow2);

        let question = new Question("Is de persoon in levensgevaar?", ["true", "false"], workflowId);
        let questionId = Questions.insert(question);

        let question2 = new Question("Is het object zwaar beschadigd?", ["true", "false"], workflowId2);
        let questionId2 = Questions.insert(question2);

        let answer = new Answer("false", new Date(), questionId);
        Answers.insert(answer);

        let answer2 = new Answer("true", new Date(), questionId2);
        Answers.insert(answer2);
    }
});

