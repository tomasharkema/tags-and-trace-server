class Model {
    static __name__: string;
}

this.Model = Model;


function cast<T>(object: any, type: any): T {
    if (object["__name__"] === undefined || new type().__name__ !== object["__name__"])
        return null;

    object.__proto__ = type.prototype;
    return <T>object;
}

this.cast = cast;