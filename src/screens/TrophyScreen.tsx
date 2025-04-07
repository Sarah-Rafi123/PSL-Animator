
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/layout/Header';
export default function TrophyScreen() {
  return (
    <View className="flex-1 bg-[#0a0a0a] justify-center items-center">
        <Header/>
      <Text className="text-white text-2xl">Trophy Screen</Text>
    </View>
  );
}
