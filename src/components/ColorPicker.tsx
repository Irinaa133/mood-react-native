import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {View, ViewStyle} from 'react-native';

import {width} from '../data';
import {throttle} from '../utils';

interface ColorPickerControlProps {
  items: number[];
  light: number;
  color: number;
  type: 'lightness' | 'hue';
  widthPicker?: number;
  onChange: (value: number) => void;
}

export const ColorPicker: FC<ColorPickerControlProps> = ({
  widthPicker = width - 40,
  color,
  light,
  items,
  type,
  onChange,
}) => {
  const [sizeColorBlock] = React.useState<number>(widthPicker / items.length);

  const [translateX] = React.useState(
    new Animated.Value<number>(
      (type === 'lightness' ? light : color) * sizeColorBlock,
    ),
  );

  const changeColor = React.useCallback(
    throttle((color) => onChange(color), 0),
    [],
  );

  const handleGestureEvent = (e: PanGestureHandlerGestureEvent) => {
    const {x} = e.nativeEvent;
    const newX = x < -12 ? -12 : x > widthPicker - 12 ? widthPicker - 12 : x;
    translateX.setValue(newX);
    const currColor = items[newX < 0 ? 0 : Math.round(newX / sizeColorBlock)];
    changeColor(currColor);
  };

  const renderItems = () => {
    return items.map((item, key) => {
      const backgroundColor =
        type === 'lightness'
          ? `hsl(${color}, 100%, ${item}%)`
          : `hsl(${item}, 100%, ${light}%)`;
      return (
        <View
          key={key}
          style={{
            flex: 1,
            height: 20,
            backgroundColor: backgroundColor,
          }}
        />
      );
    });
  };

  return (
    <PanGestureHandler onGestureEvent={handleGestureEvent}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {renderItems()}
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  translateX,
                },
              ],
            },
          ]}
        />
      </View>
    </PanGestureHandler>
  );
};

interface Styles {
  circle: ViewStyle;
}

const styles: Styles = {
  circle: {
    position: 'absolute',
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 15,
  },
};
