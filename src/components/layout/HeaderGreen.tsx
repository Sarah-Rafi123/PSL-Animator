import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrowGreen from '../../assets/svg/backArrowGreen';// Adjust path if needed

export default function HeaderGreen() {
  const navigation = useNavigation();

  return (
    <View className=" mb-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrowGreen />
      </TouchableOpacity>
    </View>
  );
}
