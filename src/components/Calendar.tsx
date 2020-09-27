import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import {
  Calendar as WixCalendar,
  CalendarBaseProps,
  CalendarMarkingProps,
} from 'react-native-calendars';

import {globalStyles} from '../styles';

export const Calendar: FC<CalendarMarkingProps & CalendarBaseProps> = (
  props,
) => (
  <WixCalendar
    style={styles.calendar}
    theme={{
      arrowColor: globalStyles.colors.mainColor,
      dayTextColor: globalStyles.colors.mainColor,
      monthTextColor: globalStyles.colors.mainColor,
      textDayFontWeight: 'bold',
      textMonthFontWeight: 'bold',
      textDayFontSize: 13,
      textMonthFontSize: 16,
      'stylesheet.day.basic': {
        base: {
          width: 25,
          height: 25,
          alignItems: 'center',
        },
      },
      'stylesheet.calendar.main': {
        week: {
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
      },
    }}
    maxDate={new Date()}
    {...props}
  />
);

interface Styles {
  calendar: ViewStyle;
}

const styles: Styles = {
  calendar: {
    marginTop: 20,
    width: '100%',
    height: 300,
    borderColor: globalStyles.colors.mainColor,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 20,
  },
};
