
class Breadcrumb {
    name: string;
    url: string;
    active: boolean;

    constructor(name:string, url:string, active:boolean) {
        this.name = name;
        this.url = url;
        this.active = active;
    }
}

Template['breadcrumb'].helpers({
    parents: function() {

        var elements: Array<Breadcrumb> = [
            new Breadcrumb("Home", "/", true)
        ];

        var incident: Incident = cast<Incident>(this, Incident);

        if (incident)
            elements.push(new Breadcrumb(incident.label, "/incident/"+incident._id, false));

        var workflow: Workflow = cast<Workflow>(this, Workflow);
        if (workflow) {
            var incident = Incidents.findOne(workflow.incidentId);
            elements.push(new Breadcrumb(incident.label, "/incident/"+incident._id, true));
            elements.push(new Breadcrumb(workflow.label, "/workflow/"+workflow._id, false));
        }

        var question = cast<Question>(this, Question);
        if (question) {
            var workflow = Workflows.findOne(question.workflowId);
            var incident = Incidents.findOne(workflow.incidentId);
            elements.push(new Breadcrumb(incident.label, "/incident/"+incident._id, true));
            elements.push(new Breadcrumb(workflow.label, "/workflow/"+workflow._id, true));
            elements.push(new Breadcrumb(question.label, "/question/"+question._id, false));
        }

        return elements
    },
    attributes: function() {
        return {
            "class": this.active ? "" : "active"
        }
    }
});