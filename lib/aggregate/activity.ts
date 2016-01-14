class Activity {

    url: string;
    date: Date;
    title: string;
    message: string;

    constructor(url:string, date:Date, title:string, message:string) {
        this.url = url;
        this.date = date;
        this.title = title;
        this.message = message;
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
                .map((question) => TagRecords.find({}).map((tag) => {
                    let t = cast<TagRecord>(tag, TagRecord);

                    return Answers.find({$and: [{_id: {$in: t.answers}}, {questionId: question._id}]}).map((a) => {
                        let answer = cast<Answer>(a, Answer);
                        return new Activity(
                            "/question/"+question._id+"#a-"+answer._id,
                            t.dateRecorded, tag.deviceId + " heeft antwoord gegeven op een vraag",
                            question.label  + " " +answer.getValue());
                    });
                })));
            return _.sortBy(_.flatten(workflows), (ans) => ans.date).reverse()
    }
}

this.Activity = Activity;