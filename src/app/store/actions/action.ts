

export class InCrement {
    type: string = operation.Increment;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class deCrement {
    type: string = operation.decrement;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export enum operation {
    Increment = "increment",
    decrement = "decrement"
}