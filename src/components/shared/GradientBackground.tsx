import React from 'react';
import { ScrollView, ViewStyle, ImageBackground } from 'react-native';
import background from '../../assets/images/background.png'; // Import your default image

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function GradientBackground({ children, style }: Props) {
  return (
    <ImageBackground
      source={background}  // Use the default image as the background
      style={[{ flex: 1 }, style]}  // Apply styles and flex
      resizeMode="cover"  // Make the image cover the screen
    >
      <ScrollView className="flex-1 mt-10 p-6">
        {children}
      </ScrollView>
    </ImageBackground>
  );
}
