class Activity {

    static forIncident(incidentId: string) {

        var workflows = Workflows.find({incidentId: incidentId})
            .map((workflow, number, cursor) => {
                return Questions.find({workflowId: workflow._id})
                    .map((question, number, cursor) => {
                        return Answers.find({questionId: question._id})
                            .map((answer, number, cursor) => {
                                return {
                                    url: "/answer/"+answer._id,
                                    date: answer.date,
                                    title: "_ heeft antwoord gegeven op "+question.label+": " + answer.value
                                }
                            })
                    });
            });
        return _.flatten(workflows)
    }
}

this.Activity = Activity;