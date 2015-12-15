/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../model/collections.ts"/>
Template['workflow'].helpers({
    workflow: function() {
        return Workflows.findOne({ _id: FlowRouter.current().params.workflowId })
    }
});

Template['workflows'].helpers({
    workflows: function() {
        return Workflows.find({}, { sort: { _id: -1 } });
    }
});

Template['workflowEdit'].helpers({
    workflow: function() {
        return Workflows.findOne({ _id: FlowRouter.current().params.workflowId })
    }
});

Template['workflowNew'].events({
    "submit .workflowNew": function(event) {
        event.preventDefault();

        var label = event.target.label.value;

        console.log(label);

    }
});