/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Answer implements Nameable {
    _id: string;
    value: string;
    date: Date;

    deviceId: string;

    questionOptionId: string;
    questionId: string;

    __name__: string = "answer";

    constructor(date: Date, value: string, questionId: string, questionOptionId: string, deviceId: string) {
        this.value = value;
        this.date = date;
        this.questionId = questionId;
        this.questionOptionId = questionOptionId;
        this.deviceId = deviceId;
    }

    getValue(): string {
        if (this.value) {
            return this.value
        }

        return QuestionOptions.findOne(this.questionOptionId).value
    }
}

this.Answer = Answer;

declare var Answers: Mongo.Collection<Answer>;
Answers = new Mongo.Collection<Answer>('answers');
this.Answers = Answers;
