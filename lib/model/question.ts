// <reference path="../collections.ts"/>
// <reference path="../../typings/tsd.d.ts"/>
class Question implements Nameable {
    _id: string;
    label: string;
    workflowId: string;
    __name__: string = "question";

    constructor(label: string, workflowId: string) {
        this.label = label;
        this.workflowId = workflowId;
    }
}

this.Question = Question;

declare var Questions: Mongo.Collection<Question>;
Questions = new Mongo.Collection<Question>('questions');
this.Questions = Questions;
