import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

const teams = [
  {
    id: 1,
    name: 'IND',
    country: 'Lahore Qalanders',
    points: 14,
    matches: 8,
    wins: 7,
    losses: 1,
    flag: require('../../assets/images/lahore.jpeg'), // Add your flag image path
  },
  {
    id: 2,
    name: 'ENG',
    country: 'Islamabad United',
    points: 12,
    matches: 8,
    wins: 6,
    losses: 1,
    flag: require('../../assets/images/islamabad.jpeg'), // Add your flag image path
  },
  {
    id: 3,
    name: 'AUS',
    country: 'Karachi Kings',
    points: 10,
    matches: 8,
    wins: 5,
    losses: 3,
    flag: require('../../assets/images/karachi.jpeg'), // Add your flag image path
  },
  {
    id: 4,
    name: 'SA',
    country: 'Peshawar Zalmi',
    points: 6,
    matches: 7,
    wins: 3,
    losses: 4,
    flag: require('../../assets/images/zalmi.jpeg'),  // Add your flag image path
  },
  {
    id: 5,
    name: 'PAK',
    country: 'Multan Sultans',
    points: 6,
    matches: 6,
    wins: 3,
    losses: 3,
    flag: require('../../assets/images/multan.jpeg'), // Add your flag image path
  },
  {
    id: 6,
    name: 'NZ',
    country: 'Quetta Gladiators',
    points: 5,
    matches: 5,
    wins: 2,
    losses: 3,
    flag: require('../../assets/images/quetta.jpeg'), // Add your flag image path
  },
];

export default function TeamStandingChart() {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll); // Toggle between showing all and showing 3
  };

  const displayedTeams = showAll ? teams : teams.slice(0, 3); // Show 3 teams initially

  return (
    <View className="mt-8 bg-white p-4 rounded-3xl">
      <Text className="text-black text-xl font-bold mb-4">Team Standing</Text>
      
      {/* Column Headings */}
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-black font-semibold text-left" style={{ width: 40 }}></Text>
        <Text className="text-black font-semibold" style={{ flex: 1 }}>Team</Text>
        <Text className="text-black font-semibold" style={{ width: 30 }}>P</Text>
        <Text className="text-black font-semibold" style={{ width: 30 }}>W</Text>
        <Text className="text-black font-semibold" style={{ width: 30 }}>L</Text>
        <Text className="text-black font-semibold" style={{ width: 30 }}>Pt</Text>
      </View>

      {/* List of Teams */}
      <FlatList
        data={displayedTeams}
        renderItem={({ item, index }) => (
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-gray-500" style={{ width: 40 }}>{index + 1}</Text> {/* Show numbering */}
            <View className="flex-row items-center" style={{ flex: 1 }}>
              <Image source={item.flag} className="w-6 h-6 mr-2" /> 
              <Text className="font-semibold">{item.country}</Text>
            </View>
            <Text className="text-gray-500" style={{ width: 30 }}>{item.matches}</Text>
            <Text className="text-gray-500" style={{ width: 30 }}>{item.wins}</Text>
            <Text className="text-gray-500" style={{ width: 30 }}>{item.losses}</Text>
            <Text className="text-gray-500" style={{ width: 30 }}>{item.points}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      
      {/* "View All" or "View Less" Button */}
      <TouchableOpacity
        onPress={handleViewAll}
        className="bg-[#0A4F20] p-2 mt-4 rounded-md text-center"
      >
        <Text className="text-white text-center">{showAll ? 'View Less' : 'View All'}</Text>
      </TouchableOpacity>
    </View>
  );
}
