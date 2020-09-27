import React from 'react';
import {
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
  ImageStyle,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {navToScreen} from '../utils';

import {globalStyles} from '../styles';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <StatusBar backgroundColor={globalStyles.colors.mainColor} />
      <View style={styles.container}>
        <View>
          <Text style={styles.title} children="Happify.you" />
        </View>
        <View style={{marginTop: 200, alignItems: 'center'}}>
          <Text
            style={styles.text}
            children="Ready to train yourself for happiness?"
          />
          <View style={{marginTop: 40}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navToScreen(navigation, 'Main')}>
              <Text style={styles.textButton} children="Start for demo" />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.image}
          source={require('../../assets/images/main.png')}
        />
      </View>
    </React.Fragment>
  );
};

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  text: TextStyle;
  image: ImageStyle;
  button: ViewStyle;
  textButton: TextStyle;
}

const styles: Styles = {
  container: {
    backgroundColor: globalStyles.colors.mainColor,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: globalStyles.colors.secondaryColor,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    color: globalStyles.colors.secondaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: globalStyles.fontSize.xl,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    backgroundColor: globalStyles.colors.secondaryColor,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 40,
  },
  textButton: {
    color: globalStyles.colors.mainColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: globalStyles.fontSize.ml,
  },
};
