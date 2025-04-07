import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/shared/CustomInput';
import CustomButton from '../../components/shared/CustomButton';
import GradientBackground from '../../components/shared/GradientBackground';

export default function SignUpScreenOne() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState(''); // email or phone

  const handleNext = () => {
    if (!name.trim() || !identifier.trim()) {
      Alert.alert('Validation Error', 'Name and Email/Phone cannot be empty.');
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isPhone = /^\d{10,15}$/.test(identifier);

    if (!isEmail && !isPhone) {
      Alert.alert('Invalid Input', 'Please enter a valid email or phone number.');
      return;
    }

    // Proceed to next signup step or API call
    Alert.alert('Success', `Proceeding with ${isEmail ? 'email' : 'phone'}!`);
    navigation.navigate('SignUpTwo'); // Replace with your next screen
  };

  return (
    <GradientBackground>
      <Text className="text-white font-bebas text-3xl font-bold mb-2">
        <Text className="px-1 text-primaryBlue">Sign Up</Text> 
      </Text>
      <Text className="text-white mb-6">Create your account to continue</Text>

      <CustomInput
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <CustomInput
        label="Email or Phone Number"
        placeholder="Enter your email or phone number"
        value={identifier}
        onChangeText={setIdentifier}
      />
<View className='my-4'>
      <CustomButton
        text="Next"
        textColor="text-black"
        backgroundColor="bg-white"
        onPress={handleNext}
      />
</View>
      <View className="flex-row justify-center mt-10">
        <Text className="text-white">Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-white font-bold underline ml-1">Sign In</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
}
