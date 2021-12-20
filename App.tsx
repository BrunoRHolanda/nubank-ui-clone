import React from 'react';
import MainNavigator from "./navigation/MainNavigator";
import {StatusBar} from "react-native";

const App: React.FC = () => {
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
        <MainNavigator />
      </>
  );
}

export default App;
