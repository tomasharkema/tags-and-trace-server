class Question {
    _id: string;
    label: string;
    options: Array<string>;
    workflowId: string;

    constructor(label:string, options:Array<string>, workflowId: string) {
        this.label = label;
        this.options = options;
        this.workflowId = workflowId;
    }
}

this.Question = Question;