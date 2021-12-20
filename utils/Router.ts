import React from "react";

export class Route {

    private readonly name: string;
    private readonly component: React.FC;

    constructor(name: string, component: React.FC) {
        this.name = name;
        this.component = component;
    }

    public getName(): string {
        return this.name;
    }

    public getComponent(): React.FC {
        return this.component;
    }
}

export class RouteFactory {
    public static create(name: string, component: React.FC)  {
        return new Route(name, component);
    }
}
