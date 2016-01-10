
Template['question'].helpers({
    question: function() {
        return Questions.findOne({ _id: FlowRouter.current().params['questionId'] })
    },
    options: function() {
        return QuestionOptions.find({ questionId: FlowRouter.current().params['questionId'] })
    },
    answers: function() {
        return Answers.find({ questionId: FlowRouter.current().params['questionId'] }).map(function(answer) {
            return {
                answer: answer,
                questionOption: QuestionOptions.findOne({ _id: answer.questionOptionId })
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
    optionsAndDrafts: function() {
        let questionId = FlowRouter.current().params['questionId'];
        return _.flatten([
            QuestionOptions.find({ questionId: questionId }).fetch(),
            questionOptionDraft.get()
        ]);
    },
});

Template['questionEdit'].events({
    "click #addOption": function(event) {
        event.preventDefault();

        var previous = questionOptionDraft.get();
        questionOptionDraft.set(Utils.typedFlatten([previous, [new QuestionOption("DRAFT", FlowRouter.current().params['questionId'])]]))
    },
    "submit .questionEdit": function(event) {
        event.preventDefault();

        var id = FlowRouter.current().params['questionId'];

        Questions.update(id, {$set: { label: $("#name").val() }});

        $(".option").each(function() {
            console.log($(this).attr("data-optionid"));
            var optionId = $(this).attr("data-optionid");
            var val = $(this).val();
            if (optionId) {
                QuestionOptions.update(optionId, {$set: {value: val}})
            } else if (val !== "DRAFT") {
                var questionOption = new QuestionOption(val, id);
                QuestionOptions.insert(questionOption);
            }
        });

        questionOptionDraft.set([]);

        FlowRouter.go("/question/" + id);
    }
});