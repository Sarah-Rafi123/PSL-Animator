import { useState, useRef } from "react"
import { View, TouchableOpacity, Image, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, ChevronRight } from "lucide-react-native"
import Carousel from "react-native-reanimated-carousel"
import TeamStandingChart from "../components/widgets/teamStandingChart"
import { ScrollView } from "react-native-gesture-handler"
import MatchTabs from "../components/widgets/matchTabs"
import DashboardHeader from "../components/layout/DashboardHeader"
const { width: screenWidth } = Dimensions.get("window")

const ads = [
  { id: 1, image: require("../assets/images/ad1.jpg") },
  { id: 2, image: require("../assets/images/ad2.jpg") },
  { id: 3, image: require("../assets/images/ad3.jpeg") },
  { id: 4, image: require("../assets/images/ad4.jpeg") },
  { id: 5, image: require("../assets/images/ad5.jpeg") },
]

export default function DashboardScreen() {
  const navigation = useNavigation()
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate carousel dimensions
  const carouselWidth = screenWidth * 0.85 // Increased width for better visibility
  const carouselHeight = 180 // Adjusted height for better proportions

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % ads.length
    carouselRef.current?.scrollTo({ index: nextIndex, animated: true })
    setCurrentIndex(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + ads.length) % ads.length
    carouselRef.current?.scrollTo({ index: prevIndex, animated: true })
    setCurrentIndex(prevIndex)
  }

  return (
    <ScrollView className="flex-1 bg-gray-100 pt-14">
      <DashboardHeader />
      <View className="mt-28">
        <TeamStandingChart />
      </View>
      <View>
        <MatchTabs />
      </View>
      <View className="items-center my-20 justify-center relative" style={{ height: carouselHeight }}>
        <Carousel
          ref={carouselRef}
          data={ads}
          width={carouselWidth}
          height={carouselHeight}
          mode="slide" // Changed to slide mode for horizontal sliding effect
          loop
          autoPlay={true}
          autoPlayInterval={2500} // Adjusted timing for smoother scrolling
          scrollAnimationDuration={1200}
          onSnapToItem={(index) => setCurrentIndex(index)}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          renderItem={({ item }) => (
            <View className="overflow-hidden mx-1">
              <Image source={item.image} resizeMode="contain" className="w-full h-full" />
            </View>
          )}
        />

        {/* Carousel indicators */}
        <View className="flex-row justify-center space-x-2 absolute bottom-2">
          {ads.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </View>

        <TouchableOpacity onPress={handlePrev} className="absolute left-2 top-[42%] bg-white/80 p-1 rounded-full z-10">
          <ChevronLeft size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} className="absolute right-2 top-[42%] bg-white/80 p-1 rounded-full z-10">
          <ChevronRight size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

