
Meteor.startup(function() {
    if (Incidents.find().count() === 0) {
        console.log("LEEG!");

        var vandaag = new Date();
        var later = new Date();
        later.setYear(vandaag.getYear() + 10);

        Incidents.insert({
            name: "Orkaan Katrina",
            UUID: "ba7d4904-1ada-4789-96c1-1c21a0d4acb7",
            from: vandaag,
            active: true,
            location: {
                lat: 52,
                lon: 4
            }
        });
    }
});

