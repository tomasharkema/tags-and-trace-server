interface Nameable {
    __name__: string;
}

function cast<T extends Nameable>(object: any, type: any): T {
    if (object["__name__"] === undefined || new type().__name__ !== object["__name__"])
        return null;

    object.__proto__ = type.prototype;
    return <T>object;
}

this.cast = cast;