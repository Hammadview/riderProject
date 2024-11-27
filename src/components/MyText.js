import { Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../enums/StyleGuide';
const MyText = ({style,text,textBold,textColor}) => {
  return (
    <View>
      <Text style={[{ 
        color: textColor ? textColor : COLOR.BLUE,
        fontWeight: textBold && 'bold',
      },style]}>{text} </Text>
    </View>
  );
};

export default MyText;