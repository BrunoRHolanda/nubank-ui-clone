import React from "react";
import {Button, Text, View} from "react-native";

import {Container, NubankContainer} from "../../theme";
import {NavigationProp} from "@react-navigation/native";
import {Header} from "../../components";

interface HomeViewProps {
    navigation: NavigationProp<any, any>;
}

const HomeView: React.FC<HomeViewProps> = ({ navigation }) => {
    return (
        <NubankContainer>
            <Header />
        </NubankContainer>
    );
}

export default HomeView;
