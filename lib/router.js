FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "home"});
    }
});


FlowRouter.route('/incidents', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "incidents"});
    }
});

FlowRouter.route('/incidents/new', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "incidentNew"});
    }
});


FlowRouter.route('/incident/:incidentId', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "incident"});
    }
});

FlowRouter.route('/incident/:incidentId/edit', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "incidentEdit"});
    }
});

FlowRouter.route('/workflows', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "workflows"});
    }
});

FlowRouter.route('/workflows/new', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "workflowNew"});
    }
});


FlowRouter.route('/workflow/:workflowId', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "workflow"});
    }
});

FlowRouter.route('/workflow/:workflowId/edit', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "workflowEdit"});
    }
});

// API TESTERS
var testGroup = FlowRouter.group({
    prefix: "/test"
});

testGroup.route("/", {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "test"});
    }
});

testGroup.route('/location', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "testLocation"});
    }
});