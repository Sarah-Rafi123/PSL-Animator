//password and confirm password screen 

import React, { useState } from 'react';
import { Text, Alert, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../../components/shared/GradientBackground';
import CustomInput from '../../components/shared/CustomInput';
import CustomButton from '../../components/shared/CustomButton';
import Header from '../../components/layout/Header';
export default function SignUpScreenTwo() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Validation Error', 'Both password fields are required.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Validation Error', 'Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match.');
      return;
    }

    // Proceed to next step (e.g., signup API or success screen)
    Alert.alert('Success', 'Password set successfully!');
    navigation.navigate('SignUpThree'); // Change this to your next screen
  };

  return (
    <GradientBackground>
        <Header/>
      <Text className="text-white font-bebas text-3xl font-bold mb-2">
        <Text className="px-1 text-primaryBlue">Create</Text> your password
      </Text>
      <Text className="text-white mb-6">Secure your account with a strong password</Text>

      <CustomInput
        label="Password"
        placeholder="Enter your password"
        isPassword
        value={password}
        onChangeText={setPassword}
      />

      <CustomInput
        label="Confirm Password"
        placeholder="Re-enter your password"
        isPassword
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <CustomButton
        text="Next"
        textColor="text-black"
        backgroundColor="bg-white"
        onPress={handleNext}
      />

      <View className="flex-row justify-center mt-10">
        <Text className="text-white">Want to go back?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-white font-bold underline ml-1">Previous</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
}
