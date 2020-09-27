import React, {FC} from 'react';
import {View} from 'react-native';

import {colors, lightness} from '../data';
import {ColorPicker} from './ColorPicker';

interface ColorPickerProps {
  onChangeColor: (color: string) => void;
}

export const ColorPickers: FC<ColorPickerProps> = (props) => {
  const [color, setColor] = React.useState(227);
  const [light, setLight] = React.useState(70);

  React.useEffect(() => {
    props.onChangeColor(`hsl(${color}, 100%, ${light}%)`);
  }, [color, light]);

  return (
    <React.Fragment>
      <ColorPicker
        color={color}
        light={50}
        items={colors}
        onChange={setColor}
        type="hue"
      />
      <View style={{marginTop: 15}}>
        <ColorPicker
          color={color}
          light={light}
          items={lightness}
          onChange={setLight}
          type="lightness"
        />
      </View>
    </React.Fragment>
  );
};
