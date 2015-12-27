declare module google {
    module maps {
        interface EventStatic {
            addListener(object: Object, name: string, listener:() => void);
        }
        //export var event:EventStatic;

        //export class Marker {
        //    constructor(options: any);
        //
        //    getPosition();
        //}

        //export class LatLng {
        //    lat: number;
        //    lon: number;
        //
        //    constructor(lat: number, lon: number);
        //}
    }
}