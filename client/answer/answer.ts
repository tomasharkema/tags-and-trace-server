var getAnswer = function() {
    return Answers.findOne(FlowRouter.current().params['answerId']);
};

Template['answer'].helpers({
    "answer": function() {
        return getAnswer();
    },
    "tagrecord": function() {
        let answer = getAnswer();
        return null//TagRecords.findOne({answers: {$in: answer._id}})
    }
});