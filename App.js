import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
