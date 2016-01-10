/// <reference path="../../typings/tsd.d.ts"/>

Template['incident'].helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params['incidentId'] })
    },
    workflows: function() {
        return Workflows.find({ incidentId: FlowRouter.current().params['incidentId'] });
    },
    activity: function() {
        return Activity.forIncident(FlowRouter.current().params['incidentId'])
    }
});

Template['incidents'].helpers({
    incidents: function() {
        return Incidents.find({}, { sort: { active: -1, date: -1 } });
    }
});

Template['incidentEdit'].helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params['incidentId'] })
    }
});

Template['incidentEdit'].onRendered(function() {
    this.autorun(function() {
        $(".datetimepicker").each(function() {
            $(this).datetimepicker({
                defaultDate: $(this).attr('rel')
            });
        })
    });
});


Template['incidentEdit'].events({
    "submit .incidentEdit": function(event) {
        event.preventDefault();

        var id = FlowRouter.current().params['incidentId'];

        var label = event.target.name.value.trim();
        var dateTimeStart = event.target.start.value === "" ? null : new Date(event.target.start.value);
        var dateTimeEnd = event.target.end.value === "" ? null : new Date(event.target.end.value);

        if (id) {
            Incidents.update({
                _id: id
            }, {
                $set: {
                    label: label,
                    dateTimeStart: dateTimeStart,
                    dateTimeEnd: dateTimeEnd
                }
            });

            FlowRouter.go("/incident/" + id);
        } else {

            var incident = new Incident(label, dateTimeStart === null ? new Date() : dateTimeStart, dateTimeEnd);
            Incidents.insert(incident, function(err, id) {
                if (err) return console.error(err);
                FlowRouter.go("/incident/" + id);
            });
        }
    }
});