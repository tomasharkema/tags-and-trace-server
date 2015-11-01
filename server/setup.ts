
Meteor.startup(function() {
    if (Incidents.find().count() === 0) {
        console.log("LEEG!");

        var vandaag:Date = new Date();
        var later:Date = new Date();
        later.setFullYear(vandaag.getFullYear() + 10);

        let incident = new Incident("Orkaan Katrina", vandaag, []);
        Incidents.insert(incident);
    }
});

