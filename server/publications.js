Meteor.publish("incidents", function () {
    return Incidents.find({});
});
Meteor.publish("workflows", function () {
    return Workflows.find({});
});
Meteor.publish("questions", function () {
    return Questions.find({});
});
Meteor.publish("questionoptions", function () {
    return QuestionOptions.find({});
});
Meteor.publish("ongoingIncidents", function () {
    return Utils.ongoingIncidents();
});
Meteor.publish("answers", function () {
    return Answers.find({});
});
