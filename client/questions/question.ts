
Template['question'].helpers({
    question: function() {
        return Questions.findOne({ _id: FlowRouter.current().params['questionId'] })
    },
    options: function() {
        return QuestionOptions.find({ questionId: FlowRouter.current().params['questionId'] })
    },
    hasOptions: function() {
        return QuestionOptions.find({ questionId: FlowRouter.current().params['questionId'] }).count() > 0
    },
    answers: function() {
        return Answers.find({ questionId: FlowRouter.current().params['questionId'] }).map(function(a) {
            let answer = cast<Answer>(a, Answer);
            return {
                answer: answer,
                questionOption: QuestionOptions.findOne({ _id: answer.questionOptionId }),
                value: answer.getValue()
            }
        });
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


var questionOptionDraft = new ReactiveVar(<QuestionOption[]>[]);

Template['questionEdit'].helpers({
    question: function() {
        return Questions.findOne({ _id: FlowRouter.current().params['questionId'] })
    },
    workflows: function() {
        return Workflows.find();
    },
    optionsAndDrafts: function() {
        let questionId = FlowRouter.current().params['questionId'];
        return _.flatten([
            QuestionOptions.find({ questionId: questionId }).fetch(),
            questionOptionDraft.get()
        ]);
    },
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
    "click #addOption": function(event) {
        event.preventDefault();

        var previous = questionOptionDraft.get();
        questionOptionDraft.set(Utils.typedFlatten([previous, [new QuestionOption("DRAFT", FlowRouter.current().params['questionId'])]]))
    },
    "submit .questionEdit": function(event) {
        var id = FlowRouter.current().params['questionId'];
        event.preventDefault();

        var label = event.target.label.value;
        var workflow = event.target.workflow.value;

        var proceedWithId = function(_id) {
            $(".option").each(function() {
                var optionId = $(this).attr("data-optionid");
                var val = $(this).val();
                if (optionId) {
                    QuestionOptions.update(optionId, {$set: {value: val}})
                } else if (val !== "DRAFT") {
                    var questionOption = new QuestionOption(val, _id);
                    QuestionOptions.insert(questionOption);
                }
            });

            questionOptionDraft.set([]);
        };

        if (id) {
            Questions.update({
                _id: id
            }, {$set: {
                label: label,
                workflowId: workflow
            }});
            proceedWithId(id);
            FlowRouter.go("/question/" + id);
        } else {
            var question = new Question(label, workflow);
            Questions.insert(question, function(err, id) {
                if (err) return console.error(err);
                proceedWithId(id);
                FlowRouter.go("/question/" + id);
            });
        }

    }
});