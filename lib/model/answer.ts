/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Answer implements Nameable {
    _id: string;
    value: string;
    date: Date;

    questionOptionId: string;
    questionId: string;

    __name__: string = "answer";

    constructor(date: Date, value: string, questionId: string, questionOptionId: string) {
        this.value = value;
        this.date = date;
        this.questionId = questionId;
        this.questionOptionId = questionOptionId;
    }
}

this.Answer = Answer;

declare var Answers: Mongo.Collection<Answer>;
Answers = new Mongo.Collection<Answer>('answers');
this.Answers = Answers;
