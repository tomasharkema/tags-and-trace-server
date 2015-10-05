
Template.incident.helpers({
    incident: function() {
        return Incidents.findOne({ _id: FlowRouter.current().params.incidentId })
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

        Incidents.update({
            _id: id
        }, { $set: {
            name: name
        }});

        FlowRouter.go("/incident/" + id);
    }
});

Template.incidentNew.created = function() {
    console.log("CREATE");
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
            from: new Date()
        }, function(err, id) {
            if (err) return console.error(err);
            FlowRouter.go("/incident/" + id);
        });
    }
});