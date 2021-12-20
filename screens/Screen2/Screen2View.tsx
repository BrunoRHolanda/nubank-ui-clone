import React from "react";
import {Button, Text} from "react-native";
import {NavigationProp} from "@react-navigation/native";

import {Container} from "../../theme";

interface Screen2ViewProps {
    navigation: NavigationProp<any, any>;
}

const Screen2View: React.FC<Screen2ViewProps> = ({ navigation }) => {
    return (
        <Container>
            <Text>Screen2View</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </Container>
    );
}

export default Screen2View;
