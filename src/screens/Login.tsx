import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/shared/CustomInput';
import CustomButton from '../components/shared/CustomButton';
import GradientBackground from '../components/shared/GradientBackground';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [identifier, setIdentifier] = useState(''); // Now holds email or phone
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!identifier || !password) {
      Alert.alert('Validation Error', 'Email/Phone and Password cannot be empty.');
      return;
    }
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isPhone = /^\d{10,15}$/.test(identifier);

    if (!isEmail && !isPhone) {
      Alert.alert('Invalid Input', 'Please enter a valid email or phone number.');
      return;
    }

    // Simulate login flow
    Alert.alert('Success', `Logged in with ${isEmail ? 'email' : 'phone'}!`);
    navigation.navigate('DashboardDrawer'); // Replace with your actual screen
  };
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <GradientBackground>
      <Text className="text-white font-bebas text-3xl font-bold mb-2">
        <Text className="px-1 text-primaryBlue">Login</Text> 
      </Text>
      <Text className="text-white mb-6">Hello there, sign in to continue!</Text>

      <CustomInput
        label="Email or Phone Number"
        placeholder="Enter your email or phone number"
        value={identifier}
        onChangeText={setIdentifier}
      />

      <CustomInput
        label="Password"
        placeholder="Enter your password"
        isPassword
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity className="mb-6">
        <Text className="text-white text-right">Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton
        text="Sign in to your account"
        textColor="text-black"
       backgroundColor="bg-white"
        onPress={handleLogin}
      />
      
      <View className="flex-row justify-center mt-10">
        <Text className="text-white">Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpOne')}>
          <Text className="text-white font-bold underline ml-1">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
}
