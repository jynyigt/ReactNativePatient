import React from 'react';
import {Provider} from 'react-redux';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {ApplicationNavigator} from './navigators/application.navigator';
import {store} from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255,255,255)',
  },
};

function AppComponent() {
  return (
    <NavigationContainer theme={theme}>
      <ApplicationNavigator />
    </NavigationContainer>
  );
}

export function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}
