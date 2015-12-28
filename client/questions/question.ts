
Template['question'].helpers({
    question: function() {
        return Questions.findOne({ _id: FlowRouter.current().params['questionId'] })
    },
    answers: function() {
        return Answers.find({ questionId: FlowRouter.current().params['questionId'] });
    }
});

Template['questions'].helpers({
    questions: function() {
        return Questions.find().map(function(question) {

            var workflow = Workflows.findOne(question.workflowId);
            var incident = Incidents.findOne(workflow.incidentId);
            return {
                question: question,
                workflow: workflow,
                incident: incident
            }
        });
    }
});