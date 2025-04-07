import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../../assets/svg/backArrow';// Adjust path if needed

export default function Header() {
  const navigation = useNavigation();

  return (
    <View className=" mb-2">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow />
      </TouchableOpacity>
    </View>
  );
}
