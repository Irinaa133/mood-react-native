import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux';
import {
  HomeScreen,
  ChooseProblemScreen,
  AddProblemScreen,
  MainScreen,
} from './src/screens';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar />
          <Stack.Navigator
            headerMode="none"
            screenOptions={{
              animationEnabled: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen
              name="ChooseProblem"
              component={ChooseProblemScreen}
            />
            <Stack.Screen name="AddProblem" component={AddProblemScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
