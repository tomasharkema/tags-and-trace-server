/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
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

this.Answer = Answer;

declare var Answers: Mongo.Collection<Answer>;
Answers = new Mongo.Collection<Answer>('answers');
this.Answers = Answers;
