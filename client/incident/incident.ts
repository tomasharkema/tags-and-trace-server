/// <reference path="../../typings/tsd.d.ts" />

Template['incidentNew'].events({
    "submit .incidentNew": function(event) {
        event.preventDefault();

        var label = event.target.label.value;

        console.log(label);

        var incident = new Incident(label, new Date(), []);

        Incidents.insert(incident, function(err, id) {
            if (err) return console.error(err);
            FlowRouter.go("/incident/" + id);
        });
    }
});