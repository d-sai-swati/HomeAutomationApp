
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Hp } from '../../constants/theme';

const ButtonComponent = ({ Width, title, onPress, filled = true }) => {
  return (
    <TouchableOpacity
      className={`px-6 py-2.5  mb-7 rounded-md ${filled ? 'bg-bgGreen' : 'border border-Green'} ${Width}`}
      onPress={onPress}
    >
      <Text className={`text-center font-intSemi ${filled ? 'text-white' : 'text-textGreen'}`} style={{ fontSize: Hp(2) }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
