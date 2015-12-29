// <reference path="../collections.ts"/>
// <reference path="../../typings/tsd.d.ts"/>
class Question extends Model {
    _id: string;
    label: string;
    options: Array<string>;
    workflowId: string;

    __name__: string = "question";

    constructor(label:string, options:Array<string>, workflowId: string) {
        super();
        this.label = label;
        this.options = options;
        this.workflowId = workflowId;
    }
}

this.Question = Question;

declare var Questions: Mongo.Collection<Question>;
Questions = new Mongo.Collection<Question>('questions');
this.Questions = Questions;
