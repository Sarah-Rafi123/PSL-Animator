import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import pic1 from "../../assets/images/pic1.png";
import zalmi from "../../assets/images/zalmi.jpeg";
import islamabad from "../../assets/images/islamabad.jpeg";
import lahore from "../../assets/images/lahore.jpeg";
import multan from "../../assets/images/multan.jpeg";
import quetta from "../../assets/images/quetta.jpeg";
import karachi from "../../assets/images/karachi.jpeg";
const matchData = {
  All: [
    { 
      id: 1, 
      title: 'Live Match',
      team1: { code: 'LAHORE', flag: lahore, score: '280/6', overs: '(50 Overs)' },
      team2: { code: 'KARACHI', flag: karachi, score: '180/3', overs: '(20.5 Overs)' },
      status: 'LIVE',
      action: 'View All'
    },
    { 
      id: 2, 
      title: 'Upcoming Match',
      team1: { code: 'QUETTA', flag: quetta },
      team2: { code: 'MULTAN', flag: multan },
      status: 'Upcoming',
      timeLeft: '3h 43m left'
    },
    { 
      id: 3, 
      title: 'Finished Match',
      team1: { code: 'ISLAMABAD', flag: islamabad, score: '210/3', overs: '(45 Overs)' },
      team2: { code: 'PESHAWAR', flag: zalmi, score: '180/8', overs: '(45 Overs)' },
      status: 'Finished',
      result: 'ISLAMABAD won by 30 runs'
    },
  ],
  LIVE: [
    { 
      id: 1, 
      title: 'Live Match',
      team1: { code: 'LAHORE', flag: lahore, score: '280/6', overs: '(50 Overs)' },
      team2: { code: 'KARACHI', flag: karachi, score: '180/3', overs: '(20.5 Overs)' },
      status: 'LIVE',
      action: 'View All'
    },
  ],
  Upcoming: [
    { 
      id: 2, 
      title: 'Upcoming Match',
      team1: { code: 'QUETTA', flag: quetta },
      team2: { code: 'MULTAN', flag: multan },
      status: 'Upcoming',
      timeLeft: '3h 43m left'
    },
  ],
  Finished: [
    { 
      id: 3, 
      title: 'Finished Match',
      team1: { code: 'ISLAMABAD', flag: islamabad, score: '210/3', overs: '(45 Overs)' },
      team2: { code: 'PESHAWAR', flag: zalmi, score: '180/8', overs: '(45 Overs)' },
      status: 'Finished',
      result: 'ISLAMABAD won by 30 runs'
    },
  ],
};

const MatchTabs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [matches, setMatches] = useState(matchData.All);

  const navigation = useNavigation(); // Using the navigation hook

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMatches(matchData[tab]);
  };

  const handleViewAll = () => {
    navigation.navigate('MatchDetails'); 
  };

  const renderMatchCard = (match) => {
    return (
      <View key={match.id} className="bg-white rounded-3xl p-6 mb-4 shadow-md">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-gray-800 text-xl font-bold">{match.title}</Text>
          
          {match.status === 'LIVE' && (
            <View className="bg-gray-100 rounded-full px-3 py-1 flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />
              <Text className="font-bold text-gray-800">LIVE</Text>
            </View>
          )}
          
          {match.status !== 'LIVE' && (
            <TouchableOpacity>
              <Text className="text-gray-400">•••</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <View className="flex-row justify-between items-center py-4">
          {/* Team 1 */}
          <View className="items-center">
            <Image source={match.team1.flag} className="w-12 h-8 mb-2" resizeMode="contain" />
            <Text className="font-bold text-lg">{match.team1.code}</Text>
            {match.team1.score && (
              <>
                <Text className="font-bold">{match.team1.score}</Text>
                <Text className="text-xs text-gray-500">{match.team1.overs}</Text>
              </>
            )}
          </View>
          
          {/* VS */}
          <View className="items-center justify-center bg-gray-800 rounded-full w-10 h-10">
            <Text className="text-white font-bold">VS</Text>
          </View>
          
          {/* Team 2 */}
          <View className="items-center">
            <Image source={match.team2.flag} className="w-12 h-8 mb-2" resizeMode="contain" />
            <Text className="font-bold text-lg">{match.team2.code}</Text>
            {match.team2.score && (
              <>
                <Text className="font-bold">{match.team2.score}</Text>
                <Text className="text-xs text-gray-500">{match.team2.overs}</Text>
              </>
            )}
          </View>
        </View>
        
        <View className="items-center mt-2">
          {match.action && (
            <TouchableOpacity className="bg-[#0A4F20] rounded-full px-6 py-3" onPress={handleViewAll}>
              <Text className="text-white font-bold">{match.action}</Text>
            </TouchableOpacity>
          )}
          
          {match.timeLeft && (
            <TouchableOpacity className="bg-[#0A4F20] rounded-full px-6 py-3">
              <Text className="text-white font-bold">{match.timeLeft}</Text>
            </TouchableOpacity>
          )}
          
          {match.result && (
            <Text className="text-gray-600 font-medium">{match.result}</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Tab Buttons */}
      <View className="flex-row mb-6 border-b border-gray-200">
        {['All', 'LIVE', 'Upcoming', 'Finished'].map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`px-4 py-2 mr-2 ${activeTab === tab ? 'border-b-2 border-[#0A4F20]' : ''}`}
            onPress={() => handleTabChange(tab)}
          >
            <View className="flex-row items-center">
              <Text className={`font-bold ${activeTab === tab ? 'text-gray-800' : 'text-gray-500'}`}>
                {tab}
              </Text>
              {tab === 'LIVE' && (
                <View className="w-2 h-2 rounded-full bg-r[#0A4F20] ml-1" />
              )}
            </View>
          </TouchableOpacity>
        ))}
        
        <TouchableOpacity className="ml-auto px-4 py-2">
          <Text className="text-gray-500">•••</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {matches.map(match => renderMatchCard(match))}
      </ScrollView>
    </View>
  );
};

export default MatchTabs;
