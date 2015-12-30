/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Answer implements Nameable {
    _id: string;
    value: string;
    questionId: string;
    date: Date;

    __name__: string = "answer";

    constructor(value: string, date: Date, questionId: string) {
        this.value = value;
        this.date = date;
        this.questionId = questionId;
    }
}

this.Answer = Answer;

declare var Answers: Mongo.Collection<Answer>;
Answers = new Mongo.Collection<Answer>('answers');
this.Answers = Answers;
