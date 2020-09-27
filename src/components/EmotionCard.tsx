import React from 'react';
import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  Image,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

import {globalStyles} from '../styles';

interface EmotionCardProps {
  bg: string;
  title: string;
  img: ImageSourcePropType;
  horizontal?: boolean;
  bottomRadius?: boolean;
  imgSize?: number;
}

export const EmotionCard: React.FC<EmotionCardProps> = ({
  bg,
  title,
  img,
  horizontal,
  bottomRadius = true,
  imgSize,
}) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor: bg,
        flexDirection: horizontal ? 'row' : 'column',
        borderBottomLeftRadius: bottomRadius === false ? 0 : undefined,
        borderBottomRightRadius: bottomRadius === false ? 0 : undefined,
      },
    ]}>
    <Text style={styles.title} children={title} />
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: horizontal ? 'flex-end' : 'center',
      }}>
      <Image style={[styles.image, imgSize ? {width: imgSize, height: imgSize} : {}]} source={img} />
    </View>
  </View>
);

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

const styles: Styles = {
  container: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: globalStyles.fontSize.m,
    fontWeight: 'bold',
    color: globalStyles.colors.secondaryColor,
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
};
