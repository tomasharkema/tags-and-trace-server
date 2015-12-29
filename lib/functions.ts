class Utils {
    static ongoingIncidents() {
        var today = new Date();

        var query = {
            dateTimeStart: { $lt: today },
            $or: [
                { dateTimeEnd: { $gt: today } },
                { dateTimeEnd: null }
            ]
        };

        return Incidents.find(query, { sort: { date: -1 } })
    }

    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    static getClassName(el: any) {
        console.log(el, el["constructor"]);
        var funcNameRegex = /function (.{1,})\(/;
        var results  = (funcNameRegex).exec(el["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}

function cast<T>(object: Object, type: Object): T {
    return new type(object);
}

this.Utils = Utils;