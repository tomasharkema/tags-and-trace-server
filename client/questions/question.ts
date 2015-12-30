
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

Template['questionEdit'].helpers({
    question: function() {
        return Questions.findOne({ _id: FlowRouter.current().params['questionId'] })
    },
    workflows: function() {
        return Workflows.find();
    },
    incident: function() {
        return Incidents.findOne(this.incidentId);
    },
    workflowSelected: function() {
        var workflowId = FlowRouter.current().queryParams["workflow"];
        var question = Questions.findOne({ _id: FlowRouter.current().params['questionId'] });
        return this._id === workflowId || question.workflowId === this._id;
    }
});

Template['questionEdit'].events({
    "submit .questionEdit": function(event) {
        var id = FlowRouter.current().params['questionId'];
        event.preventDefault();

        var label = event.target.label.value;
        var workflow = event.target.workflow.value;

        if (id) {
            Questions.update({
                _id: id
            }, {$set: {
                label: label,
                workflowId: workflow
            }});

            FlowRouter.go("/question/" + id);
        } else {
            var question = new Question(label, [], workflow);
            Questions.insert(question, function(err, id) {
                if (err) return console.error(err);
                FlowRouter.go("/question/" + id);
            });
        }
    }
});