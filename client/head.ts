Template['mainLayout'].events({
    "click #nuke": function() {
        Meteor.call("nuke");
    }
});