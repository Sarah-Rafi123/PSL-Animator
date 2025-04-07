// import React, { useEffect, useRef } from 'react';
// import { Animated, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import GradientBackground from '../components/shared/GradientBackground';

// export default function SplashScreen() {
//   const logoFade = useRef(new Animated.Value(0)).current;
//   const gifFade = useRef(new Animated.Value(0)).current;
//   const navigation = useNavigation();

//   useEffect(() => {
//     // PSL logo: fade in → wait → fade out
//     Animated.sequence([
//       Animated.timing(logoFade, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.delay(1000),
//       Animated.timing(logoFade, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//     ]).start(() => {
//       // ✅ Navigate after logo fade-out finishes
//       navigation.replace('Login');
//     });

//     // GIF fade-in and stay
//     Animated.timing(gifFade, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   }, [navigation]);

//   return (
//    <View className='flex flex-1 justify-center bg-white'>

//       <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: logoFade }}>
//         <Animated.Image
//           source={require('../assets/images/pslq.png')}
//           style={{ width: 300, height: 300 }}
//           resizeMode="contain"
//         />
//       </Animated.View>
//       <Animated.View style={{ alignItems: 'center', paddingBottom: 30, opacity: gifFade }}>
//         <Animated.Image
//           source={require('../assets/gifs/wicket.gif')}
//           style={{ width: 260, height: 260 }}
//           resizeMode="contain"
//         />
//       </Animated.View>
//       </View>
//   );
// }
import React, { useEffect, useRef } from 'react';
import { Animated, View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur'; // Import the BlurView component
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

export default function SplashScreen() {
  const imageScale = useRef(new Animated.Value(0.7)).current; // Start with scaled down
  const imageOpacity = useRef(new Animated.Value(1)).current; // Full opacity
  const navigation = useNavigation();

  useEffect(() => {
    // Animate the image: Zoom in + Fade out
    Animated.sequence([
      // Zoom In: scale the image from 0.7 to 1
      Animated.timing(imageScale, {
        toValue: 1,
        duration: 3000, // 3 seconds for zoom effect
        useNativeDriver: true,
      }),
      // Fade Out: Fade out the image to 0 opacity
      Animated.timing(imageOpacity, {
        toValue: 0,
        duration: 2000, // 2 seconds for fade out
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to login screen after the animation is complete
      navigation.replace('Login');
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {/* Image as background with gradient overlay */}
      <ImageBackground
        source={require('../assets/images/splashbg.png')} // Your image
        style={{
          flex: 1,  // Make the image cover the entire screen
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="cover"
      >
        {/* Apply blur effect on the image */}
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          blurType="light" // You can change the blur type here (light, extra light, etc.)
          blurAmount={1} // You can adjust the blur intensity
        />

        {/* Gradient overlay for the corners */}
        <LinearGradient
          colors={['black', 'transparent', 'transparent', 'black']} // Black gradient on corners
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        {/* Animated Image with border radius */}
        <Animated.Image
          source={require('../assets/images/hblpsl.png')} // Your image
          style={[
            styles.animatedImage,
            {
              transform: [{ scale: imageScale }], // Apply scaling effect
              opacity: imageOpacity, // Apply fade-out effect
            }
          ]}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  animatedImage: {
    width: 300,
    height: 300,
    borderRadius: 30, // Apply border radius here
  },
});
