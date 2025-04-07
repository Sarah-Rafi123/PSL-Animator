import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import GradientBackground from '../../components/shared/GradientBackground';
import DropdownOnboarding from '../../components/shared/Dropdown';
import CustomButton from '../../components/shared/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/layout/Header';
export default function SignUpScreenThree() {
      const navigation = useNavigation();
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const ageOptions = [
    { label: 'Under 20', value: 'under_20' },
    { label: '20 to 35', value: '20_35' },
    { label: '35 to 45', value: '35_45' },
    { label: '45+', value: '45_plus' },
  ];

  const handleNext = () => {
    if (!gender || !ageRange) {
      Alert.alert('Validation Error', 'Please select both gender and age range.');
      return;
    }

    Alert.alert('Success', `Gender: ${gender}, Age Range: ${ageRange}`);
    navigation.navigate('SignUpFour');
  };

  return (
    <GradientBackground>
        <Header/>
      <Text className="text-white font-bebas text-3xl font-bold mb-4">
         Let's get to know you
      </Text>

      <Text className="text-white mb-2">Select your gender</Text>
      <DropdownOnboarding
        data={genderOptions}
        selectedValue={gender}
        onValueChange={setGender}
        placeholder={{ label: 'Select gender' }}
        backgroundColor="#fffff"
        textColor="#fff"
        placeholderColor="#ffff"
      />

      <View style={{ height: 20 }} />

      <Text className="text-white mb-2">Select your age range</Text>
      <DropdownOnboarding
        data={ageOptions}
        selectedValue={ageRange}
        onValueChange={setAgeRange}
        placeholder={{ label: 'Select age range' }}
        backgroundColor="#fffff"
        textColor="#fff"
        placeholderColor="#ffff"
      />

      <View className="mt-10">
        <CustomButton
          text="Next"
          textColor="text-black"
          backgroundColor="bg-white"
          onPress={handleNext}
        />
      </View>
    </GradientBackground>
  );
}
