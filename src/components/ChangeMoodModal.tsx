import React, {FC} from 'react';
import {
  Modal,
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {emotions} from '../data';
import {SmallEmotionCard} from './SmallEmotionCard';

import {globalStyles} from '../styles';

interface ChangeMoodModalProps {
  visible: boolean;
  onHide: () => void;
  addMood: (color: string) => void;
}

export const ChangeMoodModal: FC<ChangeMoodModalProps> = ({
  visible,
  onHide,
  addMood,
}) => {
  const onChangeCard = (color: string) => {
    addMood(color);
    onHide();
  };

  const renderEmotions = React.useMemo(() => {
    let emotionsList = [];
    for (let i = 0; i < emotions.length; i += 2) {
      emotionsList.push(
        <View
          key={emotions[i].id}
          style={{
            flex: 1,
            justifyContent: 'center',
            marginLeft: i > 0 ? 10 : 0,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.card}
            onPress={() => onChangeCard(emotions[i].bg)}>
            <SmallEmotionCard
              title={emotions[i].text}
              bg={emotions[i].bg}
              img={emotions[i].img}
            />
          </TouchableOpacity>
          {emotions[i + 1] ? (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.card, {marginTop: 10}]}
              onPress={() => onChangeCard(emotions[i + 1].bg)}>
              <SmallEmotionCard
                title={emotions[i + 1].text}
                bg={emotions[i + 1].bg}
                img={emotions[i + 1].img}
              />
            </TouchableOpacity>
          ) : (
            <View style={[styles.card, {marginTop: 10}]} />
          )}
        </View>,
      );
    }
    return emotionsList;
  }, [emotions]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onHide}>
      <View style={styles.container}>
        <View style={styles.block}>
          <ScrollView horizontal children={renderEmotions} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.cancel}
            onPress={onHide}>
            <Text style={styles.buttonText} children="Cancel" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

interface Styles {
  container: ViewStyle;
  block: ViewStyle;
  cancel: ViewStyle;
  card: ViewStyle;
  buttonText: TextStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  block: {
    backgroundColor: globalStyles.colors.secondaryColor,
    borderRadius: 20,
    padding: 20,
    height: 380,
    width: '100%',
    justifyContent: 'space-between',
  },
  cancel: {
    paddingTop: 20,
    marginTop: 10,
    marginHorizontal: -20,
    borderTopColor: '#F0F0F0',
    borderStyle: 'solid',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  card: {
    height: 120,
    width: 100,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: globalStyles.fontSize.m,
    color: globalStyles.colors.mainColor,
    fontWeight: 'bold',
  },
};
