/// <reference path="../collections.ts"/>
/// <reference path="../../typings/tsd.d.ts"/>
class Answer implements Nameable {
    _id: string;
    value: string;
    questionOptionId: string;
    questionId: string;

    __name__: string = "answer";

    constructor(value: string, questionId: string, questionOptionId: string) {
        this.value = value;
        this.questionId = questionId;
        this.questionOptionId = questionOptionId;
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
