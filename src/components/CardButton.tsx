import React from 'react';
import {Text, TextStyle, ViewStyle, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {globalStyles} from '../styles';

interface CardButtonProps {
  icon: string | React.ReactElement;
  text: string;
}

export const CardButton: React.FC<CardButtonProps> = ({icon, text}) => (
  <View style={styles.card}>
    {typeof icon === 'string' ? (
      <AntDesign
        name={icon}
        size={42}
        color={globalStyles.colors.mainColor}
      />
    ) : (
      <View>{icon}</View>
    )}
    <Text style={styles.cardText} children={text} />
  </View>
);

interface Styles {
  card: ViewStyle;
  cardText: TextStyle;
}

const styles: Styles = {
  cardText: {
    color: globalStyles.colors.mainColor,
    textAlign: 'center',
    fontWeight: '300',
    opacity: 0.6,
    fontSize: globalStyles.fontSize.m,
    marginTop: 5,
  },
  card: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: globalStyles.colors.mainColor,
    borderStyle: 'dashed',
    borderWidth: 1,
    flex: 1,
    padding: 20,
  },
};
