import React from 'react';
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  ImageSourcePropType,
  Text,
  TextStyle,
} from 'react-native';
import {globalStyles} from '../styles';

interface EmotionIconProps {
  bg: string;
  img: ImageSourcePropType;
  title: string;
}

export const SmallEmotionCard: React.FC<EmotionIconProps> = ({bg, img, title}) => (
  <View style={[styles.container, {backgroundColor: bg}]}>
    <Text
      style={styles.title}
      ellipsizeMode="tail"
      numberOfLines={2}
      children={title}
    />
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <Image style={styles.image} source={img} />
    </View>
  </View>
);

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

const styles: Styles = {
  container: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    fontSize: globalStyles.fontSize.s,
    fontWeight: 'bold',
    color: globalStyles.colors.secondaryColor,
    marginBottom: 5,
    flexWrap: 'wrap',
  },
};
