import React from 'react';
import {
  StatusBar,
  View,
  ViewStyle,
  Text,
  TextStyle,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import {Store} from '../redux';
import {addDate, EmotionDate} from '../redux/emotionsDates';
import {Emotion} from '../data';
import {CardButton, EmotionCard} from '../components';
import {navToScreen} from '../utils';

import {globalStyles} from '../styles';

interface ScreenI {
  emotions: Emotion[];
  dates: any;
  addEmotionDate: (date: EmotionDate) => void;
}

const Screen: React.FC<ScreenI> = ({emotions, addEmotionDate}) => {
  const navigation = useNavigation();
  const emotionsList = React.useMemo<(Emotion & {button?: boolean})[]>(() => {
    return [
      ...emotions.slice(1),
      {
        id: '7',
        button: true,
        bg: 'none',
        img: require('../../assets/images/emotion1.png'),
        text: 'Add Your Problem',
      },
    ];
  }, [emotions]);

  const selectEmotion = (item: Emotion) => {
    addEmotionDate({
      selected: true,
      selectedColor: item.bg,
      moodId: item.id,
    });
    navToScreen(navigation, 'Main');
  };

  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={globalStyles.colors.secondaryColor}
      />
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={{paddingTop: 20}}>
              <View style={{marginBottom: 20, paddingHorizontal: 20}}>
                <Text
                  style={styles.title}
                  children={'Choose your problem -\nface it.'}
                />
              </View>
              <View style={{marginHorizontal: 20}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => selectEmotion(emotions[0])}>
                  <EmotionCard
                    horizontal
                    bg={emotions[0].bg}
                    title={emotions[0].text}
                    img={require('../../assets/images/emotion1.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListFooterComponent={() => <View style={{height: 20}} />}
          keyExtractor={(item) => item.id}
          data={emotionsList}
          numColumns={2}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.card,
                {
                  marginRight:
                    index % 2 || index === emotions.length - 1 ? 20 : 0,
                },
              ]}>
              {item.button ? (
                <TouchableOpacity
                  style={{flex: 1}}
                  activeOpacity={0.7}
                  onPress={() => navToScreen(navigation, 'AddProblem')}>
                  <CardButton icon="pluscircle" text={'Add\nYour problem'} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{flex: 1}}
                  activeOpacity={0.7}
                  onPress={() => selectEmotion(item)}>
                  <EmotionCard bg={item.bg} title={item.text} img={item.img} />
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      </View>
    </React.Fragment>
  );
};

const mapStateToProps = (state: Store) => ({
  emotions: state.emotions,
  dates: state.emotionsDates,
});

const mapDispatchToProps = {
  addEmotionDate: addDate,
};

export const ChooseProblemScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen);

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  card: ViewStyle;
}

const styles: Styles = {
  container: {
    backgroundColor: globalStyles.colors.secondaryColor,
    flex: 1,
  },
  title: {
    color: globalStyles.colors.mainColor,
    fontSize: globalStyles.fontSize.l,
    fontWeight: 'bold',
    lineHeight: globalStyles.fontSize.l + 8,
  },
  card: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
  },
};
