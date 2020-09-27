import React from 'react';
import {
  StatusBar,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {CardButton, ColorPickers, EmotionCard} from '../components';
import {addEmotion} from '../redux/emotions';
import {navToScreen, uuid} from '../utils';
import {Emotion} from '../data';

import {globalStyles} from '../styles';

const options = {
  title: "Select card's mood",
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

interface ScreenI {
  addEmotion: (emotion: Emotion) => void;
}

const Screen: React.FC<ScreenI> = ({addEmotion}) => {
  const [text, setText] = React.useState('Text emotion');
  const [bg, setBg] = React.useState('#c8a2c8');
  const [img, setImg] = React.useState(require('../../assets/images/cat.jpg'));

  const navigation = useNavigation();

  const uploadImg = () => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ]);
    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.error) {
        const source = {uri: response.uri};
        setImg(source);
      }
    });
  };

  const saveMood = () => {
    addEmotion({
      id: uuid(),
      img,
      bg,
      text,
    });
    navToScreen(navigation, 'ChooseProblem');
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor={globalStyles.colors.secondaryColor} />
      <View style={styles.container}>
        <View>
          <Text style={styles.title} children="Add new mood" />
          <View style={styles.input}>
            <TextInput
              maxLength={60}
              placeholder="Text emotion"
              onChangeText={(text) => setText(text)}
              style={styles.input}
              value={text}
            />
          </View>
          <View style={styles.mt}>
            <Text style={styles.text} children="Select card's color" />
            <ColorPickers onChangeColor={setBg} />
          </View>
          <TouchableOpacity style={styles.mt} onPress={uploadImg}>
            <Text style={styles.text} children="Upload image" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{marginTop: 20, height: 200, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <EmotionCard bg={bg} title={text} img={img} />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{flex: 1, marginLeft: 15}}
              onPress={saveMood}>
              <CardButton icon="pluscircle" text={'Save Problem'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  addEmotion: addEmotion,
};

export const AddProblemScreen = connect(null, mapDispatchToProps)(Screen);

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  input: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
  mt: ViewStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalStyles.colors.secondaryColor,
    justifyContent: 'space-between',
  },
  title: {
    color: globalStyles.colors.mainColor,
    fontSize: globalStyles.fontSize.l,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    paddingHorizontal: 7,
  },
  button: {
    marginTop: 20,
    backgroundColor: globalStyles.colors.mainColor,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 40,
  },
  mt: {
    marginTop: 25,
  },
  text: {
    fontWeight: 'bold',
    fontSize: globalStyles.fontSize.m,
    marginBottom: 10,
    color: globalStyles.colors.mainColor,
  },
};
