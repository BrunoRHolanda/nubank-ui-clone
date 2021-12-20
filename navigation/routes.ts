import * as Screens from '../screens';
import {Route, RouteFactory} from "../utils/Router";

export const routes: Route[] = [
    RouteFactory.create('Home', Screens.Home),
    RouteFactory.create('Screen2', Screens.Screen2),
];

export const initialRouteAlias = 'Home';
