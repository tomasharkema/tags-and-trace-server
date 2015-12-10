class Question {
    _id: string;
    label: string;
    options: Array<string>;
    workflow: string;

    constructor(label:string, options:Array<string>, workflow: string) {
        this.label = label;
        this.options = options;
        this.workflow = workflow;
    }
}

this.Question = Question;