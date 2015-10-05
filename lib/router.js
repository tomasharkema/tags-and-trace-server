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