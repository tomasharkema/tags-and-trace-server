
Template.incident.helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params.incidentId })
    }
});

Template.incidents.helpers({
    incidents: function() {
        return Incidents.find({}, { sort: { active: -1, date: -1 } });
    }
});

Template.incidentEdit.helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params.incidentId })
    }
});

Template.incidentEdit.events({
    "submit .incidentEdit": function(event) {
        var id = FlowRouter.current().params.incidentId;

        console.log("Submit", id);

        event.preventDefault();

        var name = event.target.name.value;
        var active = event.target.active.checked;

        console.log(name, active);

        Incidents.update({
            _id: id
        }, { $set: {
            name: name,
            active: active
        }});

        FlowRouter.go("/incident/" + id);
    }
});

Template.incidentNew.created = function() {
    this.UUID = guid();
};

Template.incidentNew.helpers({
    UUID: function() {
        return Template.instance().UUID
    }
});

Template.incidentNew.events({
    "submit .incidentNew": function(event) {
        event.preventDefault();

        var name = event.target.name.value;
        var active = event.target.active.checked;
        var guid = Template.instance().UUID;

        console.log(name, active, guid);

        Incidents.insert({
            name: name,
            active: active,
            UUID: guid,
            from: new Date(),
            location: {
                lat: 52,
                lon: 4
            }
        }, function(err, id) {
            if (err) return console.error(err);
            FlowRouter.go("/incident/" + id);
        });
    }
});