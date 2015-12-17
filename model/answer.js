var Answer = (function () {
    function Answer(value, questionId, tagrecordId) {
        this.value = value;
        this.questionId = questionId;
        this.tagrecordId = tagrecordId;
    }
    return Answer;
})();
Answers = new Mongo.Collection('answers');
this.Answers = Answers;
