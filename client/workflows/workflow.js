
Template.workflow.helpers({
    workflow: function() {
        return Workflows.findOne({ _id: FlowRouter.current().params.workflowId })
    }
});

Template.workflows.helpers({
    workflows: function() {
        return Workflows.find({}, { sort: { active: -1, date: -1 } });
    }
});

Template.workflowNew.helpers({
    incidents: function(){
        return Incidents.find();
    }
});

Template.workflowEdit.helpers({
    workflow: function() {
        return Workflows.findOne({ _id: FlowRouter.current().params.workflowId })
    },
    incidents: function(){
        return Incidents.find();
    }
});

Template.workflowEdit.events({
    "submit .workflowEdit": function(event) {
        var id = FlowRouter.current().params.workflowId;

        console.log("Submit", id);

        event.preventDefault();

        var label = event.target.label.value;
        console.error(event.target.optradio.value);

        workflows.update({
            _id: id
        }, { $set: {
            label: label
        }});

        FlowRouter.go("/workflow/" + id);
    }
});

Template.workflowNew.events({
    "submit .workflowNew": function(event) {
        event.preventDefault();

        var label = event.target.label.value;

        Workflows.insert({
            label: label
        }, function(err, id) {
            if (err) return console.error(err);
            FlowRouter.go("/workflow/" + id);
        });
    }
});