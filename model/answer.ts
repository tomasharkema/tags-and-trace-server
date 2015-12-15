/// <reference path="collections.ts"/>

class Answer {
    _id: string;
    value: string;
    questionId: string;
    tagrecordId: string;


    constructor(value:string, questionId:string, tagrecordId:string) {
        this.value = value;
        this.questionId = questionId;
        this.tagrecordId = tagrecordId;
    }
}

declare var Answers: Mongo.Collection<Answer>;
Answers = new Mongo.Collection<Answer>('answers');
this.Answers = Answers;
