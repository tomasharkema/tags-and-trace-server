class Activity {

    url: String;
    date: Date;
    title: String;

    constructor(url:String, date:Date, title:String) {
        this.url = url;
        this.date = date;
        this.title = title;
    }

    static forAll(): Activity[] {
        var incidents = Incidents.find().map((incident) => {
            return Activity.forIncident(incident._id);
        });

        return _.sortBy(_.flatten(incidents), (ans) => ans.date).reverse()
    }

    static forIncident(incidentId: string): Activity[] {

        var workflows = Workflows.find({incidentId: incidentId})
            .map((workflow) => Questions.find({workflowId: workflow._id})
                .map((question) => Answers.find({questionId: question._id})
                    .map(answer => <Answer>cast(answer, Answer))
                    .map((answer) => new Activity("/question/"+question._id+"#a-"+answer._id, answer.date, answer.deviceId + " heeft antwoord gegeven op " + question.label + ": " + answer.getValue()))));

            return _.sortBy(_.flatten(workflows), (ans) => ans.date).reverse()
    }
}

this.Activity = Activity;