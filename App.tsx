import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/Splash';
import LoginScreen from './src/screens/Login';
import SignUpScreenOne from './src/screens/SignUp/SignupOne';
import SignUpScreenTwo from './src/screens/SignUp/SignupTwo';
import SignUpScreenThree from './src/screens/SignUp/SignupThree';
import SignUpScreenFour from './src/screens/SignUp/SignupFour';
import AIGenerationScreen from './src/screens/AIGeneration';
import './global.css';
import DashboardScreen from './src/screens/Dashboard';
import TeamPlayers from './src/screens/TeamPlayers';
import AIGenerationResult from './src/screens/AIGenerationResult';
import MatchDetails from './src/screens/MatchDetails';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/components/layout/DrawerNavigator';
import FanLeaderboard from './src/screens/FanLeaderboard';
import Notifications from './src/screens/Notifications';
import ARExperience from './src/screens/ARExperience';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
       <Stack.Screen name="Login" component={LoginScreen} /> 
       <Stack.Screen name="SignUpOne" component={SignUpScreenOne} /> 
       <Stack.Screen name="SignUpTwo" component={SignUpScreenTwo} />
       <Stack.Screen name="SignUpThree" component={SignUpScreenThree} />
       <Stack.Screen name="SignUpFour" component={SignUpScreenFour} />
       <Stack.Screen name="DashboardDrawer" component={DrawerNavigator} />
            <Stack.Screen name="AIGeneration" component={AIGenerationScreen} />
       <Stack.Screen name="AIGenerationResult" component={AIGenerationResult} />
       <Stack.Screen name="TeamPlayers" component={TeamPlayers} />
       <Stack.Screen name="MatchDetails" component={MatchDetails} />
        <Stack.Screen name="FanLeaderboard" component={FanLeaderboard} />
             <Stack.Screen name="Notifications" component={Notifications} />
             <Stack.Screen name="AR Experience" component={ARExperience} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
