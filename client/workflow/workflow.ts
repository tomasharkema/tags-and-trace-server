
Template['workflow'].helpers({
    workflow: function() {
        return Workflows.findOne({ _id: FlowRouter.current().params['workflowId'] })
    },
    questions: function() {
        return Questions.find({ workflowId: FlowRouter.current().params['workflowId'] });
    }
});

Template['workflows'].helpers({
    workflows: function() {
        return Workflows.find({}, { sort: { active: -1, date: -1 } }).map(function(workflow) {
            return {
                workflow: workflow,
                incident: Incidents.findOne({_id: workflow.incidentId})
            }
        });
    }
});

Template['workflowEdit'].helpers({
    workflow: function() {
        return Workflows.findOne({ _id: FlowRouter.current().params['workflowId'] })
    },
    incidents: function() {
        return Incidents.find();
    },
    incidentSelected: function() {
        var incidentId = FlowRouter.current().queryParams["incident"];
        var workflow = Workflows.findOne({ _id: FlowRouter.current().params['workflowId'] });
        return this._id === incidentId || workflow.incidentId === this._id;
    }
});

Template['workflowEdit'].events({
    "submit .workflowEdit": function(event) {
        var id = FlowRouter.current().params['workflowId'];
        event.preventDefault();

        var label = event.target.label.value;
        var incident = event.target.incident.value;

        if (id) {
            Workflows.update({
                _id: id
            }, {$set: {
                label: label,
                incidentId: incident
            }});

            FlowRouter.go("/workflow/" + id);
        } else {
            var workflow = new Workflow(label, incident);
            Workflows.insert(workflow, function(err, id) {
                if (err) return console.error(err);
                FlowRouter.go("/workflow/" + id);
            });
        }
    }
});

//Template['workflowNew'].events({
//    "submit .workflowNew": function(event) {
//        event.preventDefault();
//
//        var label: string = event.target.label.value;
//
//        var workflow = new Workflow(label, null);
//
//        Workflows.insert(workflow, function(err, id) {
//            if (err) return console.error(err);
//            FlowRouter.go("/workflow/" + id);
//        });
//    }
//});