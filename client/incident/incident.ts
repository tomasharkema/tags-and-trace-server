/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../model/collections.ts" />

Template['incident'].helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params.incidentId })
    },
    answers: function() {
        return Answers.find({})
    }
});

Template['incidents'].helpers({
    incidents: function() {
        return Incidents.find({}, { sort: { active: -1, date: -1 } });
    }
});

Template['incidentEdit'].helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params.incidentId })
    }
});

Template['incidentNew'].events({
    "submit .incidentNew": function(event) {
        event.preventDefault();

        var label = event.target.label.value;

        console.log(label);

        //var incident = new Incident(label, new Date(), []);

//        });
    }
});