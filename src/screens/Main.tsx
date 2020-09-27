import React from 'react';
import {
  Image,
  ImageStyle,
  Route,
  StatusBar,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {connect} from 'react-redux';
import {DateObject} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';

import {Calendar, MoodModal} from '../components';
import {formatDate, navToScreen} from '../utils';
import {Emotion} from '../data';
import {Store} from '../redux';
import {EmotionsDates} from '../redux/emotionsDates';

import {globalStyles} from '../styles';

interface ScreenI {
  route: Route;
  emotions: Emotion[];
  dates: EmotionsDates;
}

const Screen: React.FC<ScreenI> = ({emotions, dates}) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMood, setSelectedMood] = React.useState<Emotion | undefined>(
    undefined,
  );

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onDayPress = (day: DateObject) => {
    if (dates[day.dateString]) {
      const emotion = emotions.find(
        (emotion) => emotion.id === dates[day.dateString].moodId,
      );
      setSelectedMood(emotion);
      if (emotion) {
        showModal();
      }
    }
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor={globalStyles.colors.mainColor} />
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/boy.png')}
          />
        </View>
        <View style={styles.block}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>What is your mood today?</Text>
            <Text style={styles.name}>Irina Malina</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navToScreen(navigation, 'ChooseProblem')}>
              <Text
                style={styles.textButton}
                children={`${
                  dates[formatDate(new Date())] ? 'Change' : 'Confirm'
                } My Mood`}
              />
            </TouchableOpacity>
          </View>
          <Calendar onDayPress={onDayPress} markedDates={dates} />
        </View>
        <MoodModal
          visible={modalVisible}
          mood={selectedMood}
          onHide={hideModal}
        />
      </View>
    </React.Fragment>
  );
};

const mapStateToProps = (state: Store) => ({
  emotions: state.emotions,
  dates: state.emotionsDates,
});

export const MainScreen = connect(mapStateToProps)(Screen);

interface Styles {
  container: ViewStyle;
  block: ViewStyle;
  title: TextStyle;
  name: TextStyle;
  button: ViewStyle;
  textButton: TextStyle;
  image: ImageStyle;
  imgView: ViewStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.mainColor,
    justifyContent: 'flex-end',
  },
  block: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: globalStyles.colors.secondaryColor,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: globalStyles.fontSize.ml,
    color: globalStyles.colors.mainColor,
  },
  name: {
    marginTop: 10,
    color: 'blue',
    fontSize: globalStyles.fontSize.ml,
  },
  button: {
    marginTop: 20,
    backgroundColor: globalStyles.colors.mainColor,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 40,
  },
  textButton: {
    color: globalStyles.colors.secondaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: globalStyles.fontSize.m,
  },
  imgView: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 230,
  },
};
