
class QuestionOption implements Nameable {
    _id: string;
    value: string;
    questionId: string;

    __name__: string = "questionoption";

    constructor(value:string, questionId:string) {
        this.value = value;
        this.questionId = questionId;
    }
}

this.QuestionOption = QuestionOption;

declare var QuestionOptions: Mongo.Collection<QuestionOption>;
QuestionOptions = new Mongo.Collection<QuestionOption>('questionoptions');
this.QuestionOptions = QuestionOptions;
