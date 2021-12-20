import React from "react";
import {useNavigation, NavigationProp} from '@react-navigation/native';

import HomeView from "./HomeView";

const Home: React.FC = () => {

    const navigation = useNavigation<NavigationProp<any, any>>();

    return <HomeView navigation={navigation} />;
}

export default Home;
