import React from 'react';
import {View, Text, Image} from 'react-native';


function App(){
  return (
    <View>
      <Text>
        Welcome to group collaboration Hideki, Han and Upasana!
      </Text>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: '../images/puppy.jpeg'}}
        />
    </View>
  )
}

export default App;
