import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import GradientBackground from '../../components/shared/GradientBackground';
import CustomButton from '../../components/shared/CustomButton';
import Header from '../../components/layout/Header';

// Updated options with image sources
const options = [
  { 
    label: "Peshawar Zalmi", 
    value: "Peshawar Zalmi",
    image: require('../../assets/images/zalmi.jpeg') 
  },
  { 
    label: "Karachi Kings", 
    value: "Karachi Kings",
    image: require('../../assets/images/karachi.jpeg') 
  },
  { 
    label: "Islamabad United", 
    value: "Islamabad United",
    image: require('../../assets/images/islamabad.jpeg') 
  },
  { 
    label: "Lahore Qalanders", 
    value: "Lahore Qalanders",
    image: require('../../assets/images/lahore.jpeg') 
  },
  { 
    label: "Quetta Gladiators", 
    value: "Quetta Gladiators",
    image: require('../../assets/images/quetta.jpeg') 
  },
  { 
    label: "Multan Sultans", 
    value: "Multan Sultans",
    image: require('../../assets/images/multan.jpeg') 
  },
];

export default function SignUpScreenFour() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      Alert.alert("Error", "Please select an option before continuing.");
      return;
    }
    Alert.alert("Success", `You selected: ${selectedOption}`);
    navigation.navigate("DashboardDrawer"); 
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Header/>
        <View className="items-center mb-6">
          <Text className="text-white font-bold text-3xl text-center">What's your team?</Text>
          <Text className="text-white text-center text-lg mt-1">Select one to personalize your experience</Text>
        </View>
        <View className="flex-row flex-wrap justify-center gap-4 px-4">
          {options.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => handleSelect(item.value)}
              className={`w-[45%] h-32 p-4 rounded-xl items-center justify-center bg-[#04090F66] ${
                selectedOption === item.value ? "border-2 border-[#64D2FF]" : ""
              }`}
            >
              <Image 
                source={item.image} 
                className="w-16 h-16 mb-2" 
                resizeMode="contain" 
              />
              <Text className="text-white text-sm font-semibold text-center">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View className="absolute bottom-6 left-6 right-6">
        <CustomButton
          text="Submit"
          textColor="text-black"
          backgroundColor="bg-white"
          onPress={handleSubmit}
        />
      </View>
    </GradientBackground>
  );
}