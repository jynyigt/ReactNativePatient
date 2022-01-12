import React, {memo} from 'react';
import {SplashScreen} from '../screens/SplashScreen';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePageScreen} from '../screens/HomePageScreen';

const Stack = createStackNavigator();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
  const route = useSelector(state => state.ui.switchNavigationRoute);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {route === 'Splash' ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : null}
      {route === 'Main' ? (
        <Stack.Screen name="Main" component={HomePageScreen} />
      ) : null}
    </Stack.Navigator>
  );
});
