
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
    parents: function(ctx) {

        var incident = cast(this, Incident);

        if (incident.name() === "incident") {
            console.log("Dealin' with an incident here");

            return [
                new Breadcrumb("Home", "/", false),
                new Breadcrumb((<Incident>this).label, "/", true)
            ]
        }

        return []
    },
    attributes: function() {
        return {
            "class": this.active ? "" : "active"
        }
    }
});