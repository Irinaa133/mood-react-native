import {Vibration} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

export const navToScreen = (
  navigation: NavigationProp<any>,
  screen: string,
  params?: Record<string, any>
): void => {
  Vibration.vibrate(15);
  navigation.navigate(screen, params);
};
