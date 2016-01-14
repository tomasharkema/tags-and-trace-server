/// <reference path="../lib/collections.ts"/>
/// <reference path="../typings/tsd.d.ts"/>
Meteor.startup(function() {
    if ((Incidents.find().count() === 0) || (Workflows.find().count() === 0) || (Questions.find().count() === 0)) {
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

    let incident1 = new Incident("Chernobyl", vandaag);
    let incidentId1 = Incidents.insert(incident1);

    // Workflow 1
    let workflow1 = new Workflow("Human", incidentId1);
    let workflowId1 = Workflows.insert(workflow1);

    // Questions for Workflow 1
    let question1 = new Question("Determine triage", workflowId1);
    let questionId1 = Questions.insert(question1);

    let questionOption1 = new QuestionOption("Unknown, to be determined", questionId1);
    let questionOptionId1 = QuestionOptions.insert(questionOption1);

    let questionOption2 = new QuestionOption("T-0, Morgue", questionId1);
    let questionOptionId2 = QuestionOptions.insert(questionOption2);

    let questionOption3 = new QuestionOption("T-1, Immediate", questionId1);
    let questionOptionId3 = QuestionOptions.insert(questionOption3);

    let questionOption4 = new QuestionOption("T-2, Delayed", questionId1);
    let questionOptionId4 = QuestionOptions.insert(questionOption4);

    let questionOption5 = new QuestionOption("T-3, Minor", questionId1);
    let questionOptionId5 = QuestionOptions.insert(questionOption5);

    let questionOption6 = new QuestionOption("T-3, Not injured", questionId1);
    let questionOptionId6 = QuestionOptions.insert(questionOption6);

    let question2 = new Question("Determine contamination", workflowId1);
    let questionId2 = Questions.insert(question2);

    let questionOption7 = new QuestionOption("Unkown, to be determined", questionId2);
    let questionOptionId7 = QuestionOptions.insert(questionOption7);

    let questionOption8 = new QuestionOption("D-0, Not Contaminated", questionId2);
    let questionOptionId8 = QuestionOptions.insert(questionOption8);

    let questionOption9 = new QuestionOption("D-1, Minor", questionId2);
    let questionOptionId9 = QuestionOptions.insert(questionOption9);

    let questionOption10 = new QuestionOption("D-2, Severe", questionId2);
    let questionOptionId10 = QuestionOptions.insert(questionOption10);

    let question3 = new Question("Additional notes", workflowId1);
    let questionId3 = Questions.insert(question3);

    // Workflow 2
    let workflow2 = new Workflow("Sample", incidentId1);
    let workflowId2 = Workflows.insert(workflow2);

    // Questions for workflow 2
    let question4 = new Question("Custody chain", workflowId2);
    let questionId4 = Questions.insert(question4);

    let questionOption11 = new QuestionOption("Fresh Sample", questionId4);
    let questionOptionId11 = QuestionOptions.insert(questionOption11);

    let questionOption12 = new QuestionOption("En-route", questionId4);
    let questionOptionId12 = QuestionOptions.insert(questionOption12);

    let questionOption13 = new QuestionOption("Under Analysis", questionId4);
    let questionOptionId13 = QuestionOptions.insert(questionOption13);

    let questionOption14 = new QuestionOption("Analysis Completed", questionId4);
    let questionOptionId14 = QuestionOptions.insert(questionOption14);

    let question5 = new Question("Additional notes", workflowId2);
    let questionId5 = Questions.insert(question5);

    // Workflow 3
    let workflow3 = new Workflow("Item", incidentId1);
    let workflowId3 = Workflows.insert(workflow3);

    // Workflow 3
    let question6 = new Question("Determine contamination", workflowId3);
    let questionId6 = Questions.insert(question6);

    let questionOption15 = new QuestionOption("Unkown, to be determined", questionId6);
    let questionOptionId15 = QuestionOptions.insert(questionOption15);

    let questionOption16 = new QuestionOption("D-0, Not Contaminated", questionId6);
    let questionOptionId16 = QuestionOptions.insert(questionOption16);

    let questionOption17 = new QuestionOption("D-1, Minor", questionId6);
    let questionOptionId17 = QuestionOptions.insert(questionOption17);

    let questionOption18 = new QuestionOption("D-2, Severe", questionId6);
    let questionOptionId18 = QuestionOptions.insert(questionOption18);

    let question7 = new Question("Additional notes", workflowId3);
    let questionId7 = Questions.insert(question7);

    // Removed for demo, since this is test data
    // let answer = new Answer(null, questionId, questionOptionId);
    // let answerId = Answers.insert(answer);
    //
    // let answer2 = new Answer(null, questionId, questionOptionId2);
    // let answerId2 = Answers.insert(answer2);
    //
    // let tagRecord = new TagRecord(new Date(), 52.0, 4.0, 1.0, "ABCDEF", "ABCDEF", [answerId, answerId2]);
    // TagRecords.insert(tagRecord);
};

Meteor.methods({
    "nuke": function() {
        nuke();
    }
});
