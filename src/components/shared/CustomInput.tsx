import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

interface CustomInputProps {
  label: string;
  placeholder: string;
  isPassword?: boolean;
  value: string; 
  onChangeText: (text: string) => void; 
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  isPassword = false,
  value,
  onChangeText,
}) => {
  const [secureText, setSecureText] = useState(isPassword);

  console.log("Current input value: ", value); 
  const handleChange = (text: string) => {
    console.log("Input text updated: ", text);
    onChangeText(text); 
  };

  return (
    <View className="w-full mb-4">
      <Text className="text-white font-semibold mb-1">{label}</Text>
      <View className="flex-row items-center border border-white rounded-lg px-4 bg-transparent">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#FFFF"
          secureTextEntry={secureText}
          className="flex-1 text-white py-5"
          value={value}         
          onChangeText={handleChange} 
          autoCapitalize="none" 
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            className="p-2"
          >
            {secureText ? <EyeOff size={20} color="white" /> : <Eye size={20} color="white" />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
