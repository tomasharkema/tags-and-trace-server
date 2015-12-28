
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
    parents: () => {
        return [
            new Breadcrumb("Home", "/", false),
            new Breadcrumb("Home", "/", false)
        ]
    },
    attributes: () => {
        return {
            "class": this.active ? "" : "active"
        }
    }
});