/// <reference path="../lib/collections.ts"/>
/// <reference path="../typings/tsd.d.ts"/>
Meteor.startup(function() {
    if (Incidents.find().count() === 0) {
        nuke();
    }
});

var nuke = function() {
    console.log("First run, populating db!");

    Workflows.remove({});
    Incidents.remove({});
    Questions.remove({});
    QuestionOptions.remove({});
    Answers.remove({});
    TagRecords.remove({});

    var vandaag:Date = new Date();
    var later:Date = new Date();
    later.setFullYear(vandaag.getFullYear() + 10);

    let incident = new Incident("Orkaan Katrina", vandaag);
    let incidentId = Incidents.insert(incident);

    let workflow = new Workflow("Persoon gevonden", incidentId);
    let workflowId = Workflows.insert(workflow);

    let workflow2 = new Workflow("Object gevonden", incidentId);
    let workflowId2 = Workflows.insert(workflow2);

    let question = new Question("Is de persoon in levensgevaar?", workflowId);
    let questionId = Questions.insert(question);

    let question2 = new Question("Is het object zwaar beschadigd?", workflowId2);
    let questionId2 = Questions.insert(question2);

    let question3 = new Question("Zijn er specifieke kenmerken?", workflowId);
    let questionId3 = Questions.insert(question3);

    let question4 = new Question("Wat is de kleur?", workflowId2);
    let questionId4 = Questions.insert(question4);

    let questionOption = new QuestionOption("Ja, in levensgevaar", questionId);
    let questionOptionId = QuestionOptions.insert(questionOption);

    let questionOption2 = new QuestionOption("Nee, maar wel zwaar gewond", questionId);
    let questionOptionId2 = QuestionOptions.insert(questionOption2);

    let questionOption3 = new QuestionOption("Nee, maar wel licht gewond", questionId);
    let questionOptionId3 = QuestionOptions.insert(questionOption3);

    let answer = new Answer(new Date(), null, questionId, questionOptionId, "AABBCCDDEEFF");
    Answers.insert(answer);

    let answer2 = new Answer(new Date(), null, questionId, questionOptionId2, "AABBCCDDEEFF");
    Answers.insert(answer2);
};

Meteor.methods({
    "nuke": function() {
        nuke();
    }
});
