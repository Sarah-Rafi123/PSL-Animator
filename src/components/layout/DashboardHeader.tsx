import { View, Text, TouchableOpacity } from "react-native"
import CustomButton from "../shared/CustomButton"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import BellIcon from "../../assets/svg/BellIcon.svg"

const DashboardHeader = () => {
  const navigation = useNavigation() // Initialize navigation
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  // Function to handle button click
  const handleNavigation = () => {
    navigation.navigate("MatchDetails") // Navigate to the AIGenerationScreen
  }
  const handleNavigationAI = () => {
    navigation.navigate("AIGeneration") // Navigate to the AIGenerationScreen
  }

  return (
    <View className="flex flex-row ">
      <View className="flex-row px-6 mb-4">
        <TouchableOpacity onPress={openDrawer}>
          <Text className="text-black text-4xl font-bold">: :</Text>
        </TouchableOpacity>
      </View>
      <View className="bg-[#0A4F20] w-4/5 h-52 ml-auto rounded-3xl p-5">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity></TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-white text-2xl font-bold">LIVE Match Updates</Text>
            <View className="mt-2">
              <CustomButton
                text="Click Here!"
                textColor="text-[#0A4F20]"
                backgroundColor="bg-white"
                onPress={handleNavigation}
              />
            </View>
          </View>
          {/* <TouchableOpacity>
            <BellIcon width={24} height={24} fill="white" />
          </TouchableOpacity> */}
        </View>
      </View>

      <View className="absolute bottom-[-60%] left-1/10 w-4/5 h-52 flex-col right-1/10 bg-white rounded-tr-3xl rounded-b-3xl p-5 shadow-md">
        <Text className="text-lg font-semibold text-[#0A4F20]">Create your own</Text>
        <Text className="text-3xl font-bold ">AI Generated Team Avatar✨</Text>
        <View className="mt-4">
          <CustomButton
            text="LET'S GO"
            textColor="text-white"
            backgroundColor="bg-[#0A4F20]"
            onPress={handleNavigationAI}
          />
        </View>
      </View>
    </View>
  )
}

export default DashboardHeader

