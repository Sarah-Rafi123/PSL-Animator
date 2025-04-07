import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface CustomButtonProps {
  text: string;
  textColor: string;
  backgroundColor: string;
  borderColor?: string;
  onPress: () => void;
  imageSource?: React.ComponentType<SvgProps> | string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  borderColor = "transparent",
  onPress,

}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`py-3 px-4 opacity-80 rounded-xl w-full ${backgroundColor}`}
    >
      <View className="flex-row items-center justify-center">
        <Text className={`text-center text-base font-bold ${textColor}`}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
