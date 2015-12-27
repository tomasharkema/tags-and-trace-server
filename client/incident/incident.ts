/// <reference path="../../typings/tsd.d.ts"/>

Template['incident'].helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params.incidentId })
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

Template['incidentEdit'].events({
    "submit .incidentEdit": function(event) {
        var id = FlowRouter.current().params.incidentId;

        console.log("Submit", id);

        event.preventDefault();

        var label = event.target.label.value;

        Incidents.update({
            _id: id
        }, { $set: {
            label: label
        }});

        FlowRouter.go("/incident/" + id);
    }
});

Template['incidentNew'].events({
    "submit .incidentNew": function(event) {
        event.preventDefault();

        var label = event.target.label.value;

//        console.log(label, Utils.guid);

        if(label.trim().length != 0){

            var incident = new Incident(label, new Date());

            Incidents.insert(incident, function(err, id) {
                if (err) return console.error(err);
                FlowRouter.go("/incident/" + id);
            });
        }
        else{
            console.log("No input");
        }
    }
});