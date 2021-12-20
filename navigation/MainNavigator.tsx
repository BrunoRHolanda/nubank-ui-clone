import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {initialRouteAlias, routes} from "./routes";
import {Route} from "../utils/Router";

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteAlias}  screenOptions={{headerShown: false}}>
                {routes.map((route: Route) =>
                    <Stack.Screen
                        name={route.getName()}
                        component={route.getComponent()}
                        key={`${new Date().getTime()}-${route.getName()}`}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
);
}

export default MainNavigator;
