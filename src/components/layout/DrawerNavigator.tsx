import { createDrawerNavigator } from "@react-navigation/drawer"
import { View, Text, TouchableOpacity } from "react-native"
import { Home, Settings, Download, Users, Image, Award, Bell, Smartphone } from "lucide-react-native"
import DashboardScreen from "../../screens/Dashboard"
import SettingsScreen from "../../screens/Settings"
import AIGenerationScreen from "../../screens/AIGeneration"
import Downloads from "../../screens/Downloads"
import TeamPlayers from "../../screens/TeamPlayers"
import FanLeaderboard from "../../screens/FanLeaderboard"
import Notifications from "../../screens/Notifications"
import ARExperience from "../../screens/ARExperience"

const Drawer = createDrawerNavigator()

// Theme colors
const THEME = {
  primary: "#0A4F20", // Green
  background: "#FFFFFF", // White
  text: "#333333", // Dark text
  lightText: "#666666", // Secondary text
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#FFFFFF", // White text for active item
        drawerActiveBackgroundColor: THEME.primary, // Green background for active item
        drawerInactiveTintColor: THEME.text, // Dark text for inactive items
        drawerStyle: {
          backgroundColor: THEME.background, // White background
          width: 280, // Slightly wider drawer
        },
        drawerLabelStyle: {
          marginLeft: -20, // Reduce space between icon and label
          fontSize: 16,
          fontWeight: "500",
        },
        drawerItemStyle: {
          borderRadius: 8,
          paddingHorizontal: 8,
          marginVertical: 4,
        },
      }}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, backgroundColor: THEME.background, paddingTop: 50 }}>
            <View style={{ padding: 16, marginBottom: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: "bold", color: THEME.primary }}>PSL App</Text>
            </View>
            {props.state.routes.map((route, index) => {
              const { options } = props.descriptors[route.key]
              const label = options.title || route.name
              const isFocused = props.state.index === index

              // Get the appropriate icon based on route name
              let Icon
              switch (route.name) {
                case "Dashboard":
                  Icon = Home
                  break
                case "AIGeneration":
                  Icon = Image
                  break
                case "Downloads":
                  Icon = Download
                  break
                case "Settings":
                  Icon = Settings
                  break
                case "Team Players":
                  Icon = Users
                  break
                case "Fan Leaderboard":
                  Icon = Award
                  break
                case "Notifications":
                  Icon = Bell
                  break
                case "AR Experience":
                  Icon = Smartphone
                  break
                default:
                  Icon = Home
              }

              return (
                <View
                  key={route.key}
                  style={{
                    backgroundColor: isFocused ? THEME.primary : "transparent",
                    marginHorizontal: 12,
                    borderRadius: 8,
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate(route.name)
                    }}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 16,
                    }}
                  >
                    <Icon size={22} color={isFocused ? "white" : THEME.text} style={{ marginRight: 16 }} />
                    <Text
                      style={{
                        color: isFocused ? "white" : THEME.text,
                        fontSize: 16,
                        fontWeight: isFocused ? "600" : "500",
                      }}
                    >
                      {label}
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        )
      }}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="FanLeaderboard" component={FanLeaderboard} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="AR Experience" component={ARExperience} />
      <Drawer.Screen name="AIGeneration" component={AIGenerationScreen} />
      <Drawer.Screen name="Downloads" component={Downloads} />
      <Drawer.Screen name="Team Players" component={TeamPlayers} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}