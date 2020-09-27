import React, {FC} from 'react';
import {
  Modal,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {Emotion} from '../data';
import {EmotionCard} from './EmotionCard';

import {globalStyles} from '../styles';

interface MoodModalProps {
  visible: boolean;
  mood?: Emotion;
  onHide: () => void;
}

export const MoodModal: FC<MoodModalProps> = ({visible, onHide, mood}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onHide}>
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.block}>
              {mood ? (
                <EmotionCard
                  bottomRadius={false}
                  bg={mood.bg}
                  title={mood.text}
                  img={mood.img}
                />
              ) : null}
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.cancel}
                onPress={onHide}>
                <Text style={styles.buttonText} children="Cancel" />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
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
    paddingVertical: 40,
    paddingHorizontal: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  block: {
    backgroundColor: globalStyles.colors.secondaryColor,
    borderRadius: 20,
    height: 260,
    alignItems: 'center',
  },
  cancel: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
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
