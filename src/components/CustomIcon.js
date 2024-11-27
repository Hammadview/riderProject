import React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons

const CustomIcon = ({ name, size = 24, color = '#000', style, type = 'Ionicons' }) => {
  // Check type prop to conditionally render the correct icon component
  let IconComponent;

  // Choose the icon component based on the type prop
  switch (type) {
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    default:
      IconComponent = Ionicons;
      break;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={[styles.icon, style]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    // Add any default styles if needed
  },
});

export default CustomIcon;
