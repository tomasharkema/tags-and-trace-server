class Activity {

    static forIncident(incidentId: string) {
        var workflows = Workflows.find({incidentId: incidentId})
            .map(function(workflow) {
                return Questions.find({workflowId: workflow._id})
                    .map(function(question) {
                        return Answers.find({questionId: question._id})
                            .map(function(answer) {
                                return {
                                    date: answer.date,
                                    title: "_ heeft antwoord gegeven op <strong>"+question.label+"</strong>: " + question.
                                }
                            })
                    });
            });
        return _.flatten(workflows)
    }
}

this.Activity = Activity;