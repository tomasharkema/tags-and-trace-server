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
        BlazeLayout.render("mainLayout", {content: "incidentEdit"});
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
        BlazeLayout.render("mainLayout", {content: "workflowEdit"});
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

FlowRouter.route('/questions', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "questions"});
    }
});

FlowRouter.route('/questions/new', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "questionNew"});
    }
});


FlowRouter.route('/question/:questionId', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "question"});
    }
});

FlowRouter.route('/questions/:questionId/edit', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "questionEdit"});
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