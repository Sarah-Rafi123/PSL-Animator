import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Modal, Alert, Animated } from 'react-native';
import pic1 from "../assets/images/pic1.png";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import lahore from "../assets/images/lahore.jpeg";
import karachi from "../assets/images/karachi.jpeg";
import BackArrow from "../assets/svg/backArrow";

const LahoreFlag = () => (
  <View className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <Image 
      source={lahore} 
      className="w-full h-full"
      resizeMode="cover"
    />
  </View>
);

const KarachiFlag = () => (
  <View className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
    <Image 
      source={karachi} 
      className="w-full h-full"
      resizeMode="cover"
    />
  </View>
);

// Function to truncate player names
const formatPlayerName = (name) => {
  if (name.length > 8) {
    return name.substring(0, 6) + '...';
  }
  return name;
};

// Lahore Qalandars batting data
const lahoreQalandarsBattingData = [
  { 
    id: 1, 
    name: 'Fakhar Zaman', 
    image: pic1,
    dismissal: 'c Imad Wasim b Mohammad Amir',
    runs: 63,
    balls: 45,
    sixes: 4,
    fours: 5,
    strikeRate: 140.00
  },
  { 
    id: 2, 
    name: 'Abdullah Shafique', 
    image: pic1,
    dismissal: 'b Mir Hamza',
    runs: 24,
    balls: 18,
    sixes: 1,
    fours: 2,
    strikeRate: 133.33
  },
  { 
    id: 3, 
    name: 'Shai Hope', 
    image: pic1,
    dismissal: 'c Shoaib Malik b Imad Wasim',
    runs: 38,
    balls: 29,
    sixes: 2,
    fours: 3,
    strikeRate: 131.03
  },
  { 
    id: 4, 
    name: 'Shaheen Afridi', 
    image: pic1,
    dismissal: 'c Babar Azam b Mohammad Amir',
    runs: 15,
    balls: 8,
    sixes: 2,
    fours: 0,
    strikeRate: 187.50
  },
  { 
    id: 5, 
    name: 'David Wiese', 
    image: pic1,
    dismissal: 'b Tabraiz Shamsi',
    runs: 22,
    balls: 14,
    sixes: 2,
    fours: 1,
    strikeRate: 157.14
  },
  { 
    id: 6, 
    name: 'Rashid Khan', 
    image: pic1,
    dismissal: 'not out',
    runs: 18,
    balls: 10,
    sixes: 1,
    fours: 2,
    strikeRate: 180.00
  },
  { 
    id: 7, 
    name: 'Haris Rauf', 
    image: pic1,
    dismissal: 'not out',
    runs: 8,
    balls: 5,
    sixes: 1,
    fours: 0,
    strikeRate: 160.00
  },
];

// Karachi Kings batting data
const karachiKingsBattingData = [
  { 
    id: 1, 
    name: 'Babar Azam', 
    image: pic1,
    dismissal: 'c Rashid Khan b Shaheen Afridi',
    runs: 72,
    balls: 54,
    sixes: 2,
    fours: 7,
    strikeRate: 133.33
  },
  { 
    id: 2, 
    name: 'Sharjeel Khan', 
    image: pic1,
    dismissal: 'b Haris Rauf',
    runs: 18,
    balls: 15,
    sixes: 1,
    fours: 2,
    strikeRate: 120.00
  },
  { 
    id: 3, 
    name: 'Shoaib Malik', 
    image: pic1,
    dismissal: 'c David Wiese b Rashid Khan',
    runs: 35,
    balls: 28,
    sixes: 1,
    fours: 3,
    strikeRate: 125.00
  },
  { 
    id: 4, 
    name: 'Imad Wasim', 
    image: pic1,
    dismissal: 'b Shaheen Afridi',
    runs: 24,
    balls: 18,
    sixes: 1,
    fours: 2,
    strikeRate: 133.33
  },
  { 
    id: 5, 
    name: 'Mohammad Amir', 
    image: pic1,
    dismissal: 'not out',
    runs: 12,
    balls: 8,
    sixes: 1,
    fours: 1,
    strikeRate: 150.00
  },
  { 
    id: 6, 
    name: 'Tabraiz Shamsi', 
    image: pic1,
    dismissal: 'not out',
    runs: 5,
    balls: 4,
    sixes: 0,
    fours: 1,
    strikeRate: 125.00
  },
];

export default function MatchDetails() {
  const [activeTeam, setActiveTeam] = useState('Lahore Qalandars');
  const [voteModalVisible, setVoteModalVisible] = useState(false);
  const [predictionModalVisible, setPredictionModalVisible] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [votedTeam, setVotedTeam] = useState(null);
  const battingData = activeTeam === 'Lahore Qalandars' ? lahoreQalandarsBattingData : karachiKingsBattingData;
  
  // Animation values for prediction meter
  const lahoreProgressAnim = useRef(new Animated.Value(0)).current;
  const karachiProgressAnim = useRef(new Animated.Value(0)).current;
  
  // Prediction percentages (you can adjust these values)
  const lahoreWinPercentage = 55;
  const karachiWinPercentage = 45;

  const handleVote = (team) => {
    setVotedTeam(team);
    setHasVoted(true);
    setVoteModalVisible(false);
    Alert.alert('Success', 'You voted!');
  };
  
  const navigation = useNavigation(); // Initialize navigation
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  
  // Animate prediction meter when modal opens
  useEffect(() => {
    if (predictionModalVisible) {
      // Reset animations
      lahoreProgressAnim.setValue(0);
      karachiProgressAnim.setValue(0);
      
      // Start animations
      Animated.timing(lahoreProgressAnim, {
        toValue: lahoreWinPercentage,
        duration: 1500,
        useNativeDriver: false,
      }).start();
      
      Animated.timing(karachiProgressAnim, {
        toValue: karachiWinPercentage,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    }
  }, [predictionModalVisible]);
  
  // Convert animation values to width percentages
  const lahoreProgressWidth = lahoreProgressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  
  const karachiProgressWidth = karachiProgressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="light-content" backgroundColor="#E53E3E" />
      
      {/* Voting Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={voteModalVisible}
        onRequestClose={() => setVoteModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-3xl p-6 w-[90%] max-w-md">
            <Text className="text-2xl font-bold text-center mb-4">Vote for your team</Text>
            <Text className="text-gray-600 text-center mb-6">
              If your voted team wins, you will win a free voucher from McDonald's. Vote now!
            </Text>
            
            <View className="flex-row justify-around mb-6">
              {/* Lahore Qalandars Option */}
              <TouchableOpacity 
                className="items-center" 
                onPress={() => handleVote('Lahore Qalandars')}
              >
                <View className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
                  <Image 
                    source={lahore} 
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="font-semibold text-lg">Lahore</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className="items-center" 
                onPress={() => handleVote('Karachi Kings')}
              >
                <View className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
                  <Image 
                    source={karachi} 
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="font-semibold text-lg">Karachi</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              className="bg-gray-200 rounded-full py-3 px-6"
              onPress={() => setVoteModalVisible(false)}
            >
              <Text className="text-center font-semibold">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      {/* Prediction Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={predictionModalVisible}
        onRequestClose={() => setPredictionModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-3xl p-6 w-[90%] max-w-md">
            <Text className="text-2xl font-bold text-center mb-4">Match Prediction</Text>
            
            {/* Team Flags */}
            <View className="flex-row justify-between items-center mb-6">
              <View className="items-center">
                <View className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
                  <Image 
                    source={lahore} 
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="font-semibold text-lg">Lahore</Text>
                <Text className="font-bold text-lg">{lahoreWinPercentage}%</Text>
              </View>
              
              <Text className="font-bold text-xl">VS</Text>
              
              <View className="items-center">
                <View className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
                  <Image 
                    source={karachi} 
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="font-semibold text-lg">Karachi</Text>
                <Text className="font-bold text-lg">{karachiWinPercentage}%</Text>
              </View>
            </View>
            
            {/* Prediction Meter */}
            <View className="mb-6">
              <Text className="text-center font-semibold mb-2">Winning Prediction</Text>
              
              {/* Lahore Meter */}
              <View className="flex-row items-center mb-3">
                <Text className="w-24 font-medium">Lahore</Text>
                <View className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <Animated.View 
                    className="h-full bg-green-500" 
                    style={{ width: lahoreProgressWidth }}
                  />
                </View>
              </View>
              
              {/* Karachi Meter */}
              <View className="flex-row items-center">
                <Text className="w-24 font-medium">Karachi</Text>
                <View className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <Animated.View 
                    className="h-full bg-blue-600" 
                    style={{ width: karachiProgressWidth }}
                  />
                </View>
              </View>
            </View>
            <View className="bg-gray-100 p-4 rounded-xl mb-6">
              <Text className="text-center text-gray-700">
                Most users voted for <Text className="font-bold">Lahore Qalandars</Text>
              </Text>
            </View>
            
            {/* Close Button */}
            <TouchableOpacity 
              className="bg-[#0A4F20] rounded-full py-3 px-6"
              onPress={() => setPredictionModalVisible(false)}
            >
              <Text className="text-center font-semibold text-white">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <ScrollView className="flex-1">
        {/* Match Card */}
        <View className="bg-[#0A4F20] rounded-3xl shadow-lg overflow-hidden">
          <View className="flex-row p-4 justify-between items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            
            <View className="bg-white rounded-full px-4 py-1 flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />
              <Text className="font-bold text-gray-800">LIVE</Text>
            </View>
          </View>
          
          {/* Match Details */}
          <View className="flex-row justify-between items-center px-8 py-4">
            {/* Lahore Qalandars */}
            <View className="items-center">
              <LahoreFlag />
              <Text className="text-white font-bold mt-2 text-lg">LHR</Text>
              <Text className="text-white font-bold">188/6</Text>
              <Text className="text-white text-xs">(20 Overs)</Text>
            </View>
            
            {/* VS */}
            <View className="items-center justify-center bg-white rounded-full w-10 h-10">
              <Text className="font-bold text-gray-800">VS</Text>
            </View>
            
            {/* Karachi Kings */}
            <View className="items-center">
              <KarachiFlag />
              <Text className="text-white font-bold mt-2 text-lg">KHI</Text>
              <Text className="text-white font-bold">166/5</Text>
              <Text className="text-white text-xs">(20 Overs)</Text>
            </View>
          </View>
          
          {/* Buttons */}
          <View className="flex-col gap-y-2 justify-center items-center pb-6 pt-2">
            <TouchableOpacity 
              className={`${hasVoted ? 'bg-gray-300' : 'bg-white'}  w-56 rounded-full items-center px-6 py-3`}
              onPress={() => !hasVoted && setVoteModalVisible(true)}
              disabled={hasVoted}
            >
              <Text className="font-bold text-gray-800 text-base">
                {hasVoted ? 'Voted' : 'Vote for your Team'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="bg-white w-64 rounded-full items-center px-6 py-3"
              onPress={() => setPredictionModalVisible(true)}
            >
              <Text className="font-bold text-gray-800 text-base">
                Show Match Prediction
              </Text>
            </TouchableOpacity>
          </View>
          
          {hasVoted && (
            <Text className="text-white text-xs text-center mb-4">
              You voted for {votedTeam}
            </Text>
          )}
        </View>
        
        {/* Scoreboard Section */}
        <View className="mx-4 mt-6 mb-4">
          <View className="bg-[#3A5A40] rounded-3xl shadow-md overflow-hidden">
            {/* Scoreboard Header */}
            <View className="p-4">
              <Text className="text-white text-2xl font-bold">SCOREBOARD</Text>
            </View>
            
            {/* Team Names - Now Clickable */}
            <View className="flex-row px-4">
              <TouchableOpacity 
                className={`py-3 px-6 flex-1 mr-2 rounded-2xl ${activeTeam === 'Lahore Qalandars' ? 'bg-[#2F4734]' : ''}`}
                onPress={() => setActiveTeam('Lahore Qalandars')}
              >
                <Text className="text-white text-center text-lg font-semibold">Lahore Qalandars</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className={`py-3 px-6 flex-1 rounded-2xl ${activeTeam === 'Karachi Kings' ? 'bg-[#2F4734]' : ''}`}
                onPress={() => setActiveTeam('Karachi Kings')}
              >
                <Text className="text-white text-center text-lg font-semibold">Karachi Kings</Text>
              </TouchableOpacity>
            </View>
            
            {/* Batting Stats Header */}
            <View className="flex-row px-4 py-3 border-b border-[#4A6A50]">
              <Text className="text-white flex-1">Batting</Text>
              <Text className="text-white w-10 text-center">R</Text>
              <Text className="text-white w-10 text-center">B</Text>
              <Text className="text-white w-10 text-center">6s</Text>
              <Text className="text-white w-10 text-center">4s</Text>
              <Text className="text-white w-16 text-center">S/R</Text>
            </View>
            
            {/* Batting Stats Rows */}
            {battingData.map((player) => (
              <View key={player.id} className="flex-row px-4 py-3 border-b border-[#4A6A50]">
                <View className="flex-row items-center flex-1">
                  <Image 
                    source={player.image || pic1} 
                    className="w-10 h-10 rounded-full mr-3"
                    resizeMode="cover"
                  />
                  <View>
                    <Text className="text-white font-medium">{formatPlayerName(player.name)}</Text>
                    <Text className="text-gray-300 text-xs">{player.dismissal}</Text>
                  </View>
                </View>
                <Text className="text-white w-10 text-center">{player.runs}</Text>
                <Text className="text-white w-10 text-center">{player.balls}</Text>
                <Text className="text-white w-10 text-center">{player.sixes}</Text>
                <Text className="text-white w-10 text-center">{player.fours}</Text>
                <Text className="text-white w-16 text-center">{player.strikeRate.toFixed(2)}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Match Info Footer */}
        <View className="bg-gray-800 p-4 mt-2 mx-4 mb-6 rounded-xl">
          <Text className="text-white font-medium mb-2">LIVE from Gaddafi Stadium, Lahore</Text>
          <Text className="text-white">Lahore Qalandars won by 22 runs</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};