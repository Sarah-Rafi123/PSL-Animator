import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import { ArrowLeft, Plus, ArrowRight } from "lucide-react-native"
import Header from "../components/layout/Header"
import HeaderGreen from "../components/layout/HeaderGreen"


// Theme colors (keeping for reference)
const THEME = {
  primary: "#0A4F20", // Green
  secondary: "#E8F5E9", // Light green
  text: "#333333", // Dark text
  lightText: "#666666", // Secondary text
  background: "#FFFFFF", // White background
}

// Mock data for players
const teamData = {
  name: "Peshawar Zalmi",
  playersSelected: 4,
  totalPlayers: 11,
  creditsLeft: 40.5,
  categories: [
    {
      name: "Wicket-keepers",
      players: [
        {
          id: 1,
          name: "Kamran Akmal",
          role: "Wicket keeper - Batsmen",
          image: "../assets/images/person.jpeg",
          stats: {
            matches: 5,
            runs: 283,
            average: 56.6,
            strikeRate: 180.0,
            credits: 9.5,
          },
        },
      ],
    },
    {
      name: "All-rounders",
      players: [
        {
          id: 2,
          name: "Shoaib Malik",
          role: "Right-handed batsman",
          image: "../assets/images/person.jpeg",
          stats: {
            matches: 5,
            runs: 170,
            average: 42.5,
            strikeRate: 230.5,
            wickets: 7,
            credits: 10.0,
          },
        },
      ],
    },
    {
      name: "Batsmen",
      players: [
        {
          id: 3,
          name: "Babar Azam",
          role: "Right-handed batsman",
          image: "../assets/images/person.jpeg",
          stats: {
            matches: 6,
            runs: 320,
            average: 53.33,
            strikeRate: 145.45,
            credits: 11.5,
          },
        },
      ],
    },
    {
      name: "Bowlers",
      players: [
        {
          id: 4,
          name: "Wahab Riaz",
          role: "Left-arm fast bowler",
          image: "../assets/images/person.jpeg",
          stats: {
            matches: 5,
            wickets: 9,
            economy: 7.8,
            average: 22.11,
            credits: 9.0,
          },
        },
      ],
    },
  ],
}

export default function TeamPlayers() {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="flex-1 p-4">
        <HeaderGreen />
        <View className="bg-[#E8F5E9] flex-row items-center p-4">
          <View className="mr-4">
            {/* Replace with actual team logo */}
            <View className="w-[60px] h-[60px] rounded-full bg-[#0A4F20] justify-center items-center">
              <Text className="text-white text-2xl font-bold">PZ</Text>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-[#333333]">{teamData.name}</Text>
          </View>
        </View>

        {/* Players List */}
        <ScrollView className="flex-1 bg-[#f5f5f5]">
          {teamData.categories.map((category, index) => (
            <View key={index} className="mt-4 px-4">
              <Text className="text-lg font-bold text-[#333333] mb-3">{category.name}</Text>

              {category.players.map((player) => (
                <View key={player.id} className="flex-row bg-white rounded-xl mb-3 overflow-hidden shadow">
                  <Image source={player.image} className="w-[100px] h-[140px] bg-[#eee]" />

                  <View className="flex-1 p-3">
                    <View className="mb-2">
                      <Text className="text-lg font-bold text-[#333333]">{player.name}</Text>
                      <Text className="text-sm text-[#666666] mt-0.5">{player.role}</Text>
                    </View>

                    <View className="flex-row justify-between mb-2">
                      <View className="flex-1">
                        <Text className="text-xs text-[#666666] mb-0.5">Matches</Text>
                        <Text className="text-sm font-medium text-[#333333]">{player.stats.matches}</Text>
                      </View>

                      <View className="flex-1">
                        <Text className="text-xs text-[#666666] mb-0.5">{player.stats.runs ? "Runs" : "Wickets"}</Text>
                        <Text className="text-sm font-medium text-[#333333]">{player.stats.runs || player.stats.wickets}</Text>
                      </View>

                      <View className="flex-1">
                        <Text className="text-xs text-[#666666] mb-0.5">Avg.</Text>
                        <Text className="text-sm font-medium text-[#333333]">{player.stats.average}</Text>
                      </View>
                    </View>

                    <View className="flex-row justify-between">
                      <View className="flex-1">
                        <Text className="text-xs text-[#666666] mb-0.5">S/R</Text>
                        <Text className="text-sm font-medium text-[#333333]">{player.stats.strikeRate}</Text>
                      </View>

                      {player.stats.wickets && (
                        <View className="flex-1">
                          <Text className="text-xs text-[#666666] mb-0.5">Wickets</Text>
                          <Text className="text-sm font-medium text-[#333333]">{player.stats.wickets}</Text>
                        </View>
                      )}

                      <View className="flex-1">
                        <Text className="text-xs text-[#666666] mb-0.5">Credits</Text>
                        <Text className="text-sm font-medium text-[#333333]">{player.stats.credits}</Text>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity className="w-[40px] h-[40px] rounded-full bg-[#0A4F20] justify-center items-center absolute right-3 top-3">
                    <Plus size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}

          {/* Bottom padding */}
          <View className="h-10" />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}