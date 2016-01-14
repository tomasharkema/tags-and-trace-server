var getAnswer = function() {
    let answer = Answers.findOne(FlowRouter.current().params['answerId']);
    return cast<Answer>(answer, Answer);
};

var getTagRecord = function() {
    return TagRecords.findOne({answers: FlowRouter.current().params['answerId']});
};

Template['answer'].onCreated(function() {
    this.autorun(function() {
        GoogleMaps.ready('answerLocationMap', function(map) {
            let tagrecord = getTagRecord();
            new google.maps.Marker({
                position: new google.maps.LatLng(tagrecord.latitude, tagrecord.longitude),
                map: map.instance,
                title: 'Hello World!',
                draggable: true
            });
        });
    });
});

Template['answer'].helpers({
    "answer": getAnswer,
    "value": function() {
        return getAnswer().getValue()
    },
    answerMapOptions: function() {
        if (GoogleMaps.loaded()) {
            let tagrecord = getTagRecord();
            return {
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                center: new google.maps.LatLng(tagrecord.latitude, tagrecord.longitude),
                zoom: 17
            };
        }
    },
    "tagrecord": getTagRecord,
    question: function() {
        let answer = getAnswer();
        return Questions.findOne(answer.questionId);
    }
});