import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Window Width: {windowWidth}</Text>
      <Text>Window Height: {windowHeight}</Text>
      <Text>Screen Width: {screenWidth}</Text>
      <Text>Screen Height: {screenHeight}</Text>
    </View>
  );
};

export default App;
