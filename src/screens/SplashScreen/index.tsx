import {Image, Text, View} from 'react-native';
import {Styles} from './style';
import React from 'react';
import {useSwitchNavigation} from '../../store/ui/hooks';
import {useTimeout} from '../../hooks/ timeout';

const DELAY_SECONDS = 2;

export function SplashScreen() {
  const navigation = useSwitchNavigation();
  useTimeout(() => navigation.navigate('Main'), DELAY_SECONDS * 1000);

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.imageView}
        source={require('./images/FHIR1-1024x766.jpeg')}
      />
      <Text style={Styles.text}>Patient Search with FHIR</Text>
    </View>
  );
}
