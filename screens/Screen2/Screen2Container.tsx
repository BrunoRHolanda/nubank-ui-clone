import React from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import Screen2View from "./Screen2View";

const Screen2: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any, any>>();

    return <Screen2View navigation={navigation} />;
}

export default Screen2;
