import {ImageSourcePropType} from "react-native";

export interface Emotion {
  id: string;
  img: ImageSourcePropType;
  bg: string;
  text: string;
}

export const emotions: Emotion[] = [
  {
    id: '0',
    img: require('../../assets/images/emotion1.png'),
    bg: '#ff9f24',
    text: 'Why is this happening to me all the time?',
  },
  {
    id: '1',
    img: require('../../assets/images/emotion1.png'),
    bg: '#ffc639',
    text: "Why you don't notice me?",
  },
  {
    id: '2',
    img: require('../../assets/images/question.png'),
    bg: '#ffcdb6',
    text: 'Who am I at the really?',
  },
  {
    id: '3',
    img: require('../../assets/images/emotion1.png'),
    bg: '#b87771',
    text: "Don't touch me",
  },
  {
    id: '4',
    img: require('../../assets/images/boy2.png'),
    bg: '#ffc639',
    text: 'I am very happy today',
  },
  {
    id: '5',
    img: require('../../assets/images/boy.png'),
    bg: '#ffcdb6',
    text: 'I need a cat',
  },
];
