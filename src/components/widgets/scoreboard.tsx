import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// Data for Australia and India
const scoreboardData = {
  Australia: [
    { player: "David Warner", runs: 41, balls: 52, sixes: 6, fours: 0, sr: 78.85 },
    { player: "Mitchell Marsh", runs: 0, balls: 6, sixes: 0, fours: 0, sr: 0.00 },
    { player: "Steve Smith", runs: 46, balls: 71, sixes: 5, fours: 0, sr: 64.79 },
    { player: "Marnus Labuschagne", runs: 27, balls: 41, sixes: 1, fours: 0, sr: 65.85 },
    { player: "Glenn Maxwell", runs: 15, balls: 24, sixes: 1, fours: 0, sr: 60.00 },
    { player: "Alex Carey", runs: 0, balls: 2, sixes: 0, fours: 0, sr: 0.00 },
    { player: "Cameron Green", runs: 8, balls: 19, sixes: 0, fours: 0, sr: 46.15 },
  ],
  India: [
    { player: "Rohit Sharma", runs: 50, balls: 40, sixes: 2, fours: 4, sr: 125.00 },
    { player: "Virat Kohli", runs: 30, balls: 38, sixes: 1, fours: 3, sr: 78.95 },
    { player: "KL Rahul", runs: 28, balls: 31, sixes: 1, fours: 2, sr: 90.32 },
    { player: "Shubman Gill", runs: 23, balls: 21, sixes: 2, fours: 1, sr: 109.52 },
    { player: "Hardik Pandya", runs: 12, balls: 8, sixes: 1, fours: 1, sr: 150.00 },
    { player: "Rishabh Pant", runs: 18, balls: 20, sixes: 0, fours: 2, sr: 90.00 },
    { player: "Jasprit Bumrah", runs: 4, balls: 7, sixes: 0, fours: 0, sr: 57.14 },
  ],
};

export default function ScoreBoard() {
  const [selectedCountry, setSelectedCountry] = useState("Australia");
  const [data, setData] = useState(scoreboardData[selectedCountry]);

  // Function to handle country change
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setData(scoreboardData[country]);
  };

  const renderItem = ({ item }) => (
    <View className="flex-row py-2 border-b border-gray-500">
      <Text className="flex-1 text-gray-500 text-left pl-4">{item.player}</Text>
      <Text className="flex-1 text-gray-500  text-center">{item.runs}</Text>
      <Text className="flex-1 text-gray-500  text-center">{item.balls}</Text>
      <Text className="flex-1 text-gray-500  text-center">{item.sixes}</Text>
      <Text className="flex-1 text-gray-500 text-center">{item.fours}</Text>
      <Text className="flex-1 text-gray-500 text-center">{item.sr}</Text>
    </View>
  );

  return (
    <View className="bg-white flex-1 p-4 mt-5">
      {/* Country Selector */}
      <View className="flex-row items-center justify-center space-x-4 mb-5">
        <TouchableOpacity onPress={() => handleCountryChange("Australia")}>
          <Text className="text-white text-xl border border-gray-200 bg-slate-600 rounded-full font-bold py-3 px-10">Australia</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCountryChange("India")}>
          <Text className="text-white text-xl border border-gray-200 bg-slate-600 rounded-full font-bold py-3 px-10">India</Text>
        </TouchableOpacity>
      </View>

      {/* Scoreboard */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <View className="flex-row mb-3">
            <Text className="flex-1 text-black font-bold text-center">Player</Text>
            <Text className="flex-1  text-black font-bold text-center">R</Text>
            <Text className="flex-1  text-black font-bold text-center">B</Text>
            <Text className="flex-1  text-black font-bold text-center">6s</Text>
            <Text className="flex-1  text-black font-bold text-center">4s</Text>
            <Text className="flex-1  text-black font-bold text-center">S/R</Text>
          </View>
        }
        
      />

      {/* View All Button */}
      <TouchableOpacity className="bg-black py-2 rounded-md items-center">
        <Text className="text-white text-lg">View All</Text>
      </TouchableOpacity>
    </View>
  );
}
