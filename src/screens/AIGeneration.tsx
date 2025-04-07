import { useState } from "react"
import { View, Text, TouchableOpacity, Image, Modal, ActivityIndicator, Alert, SafeAreaView } from "react-native"
import { launchImageLibrary, launchCamera } from "react-native-image-picker"
import { Camera, ImageIcon } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"
import HeaderGreen from "../components/layout/HeaderGreen"

// Green color theme
const THEME = {
  primary: "#0A4F20", // Green
  secondary: "#0A4F20", // Light green
  text: "#333333", // Dark text
  lightText: "#666666", // Secondary text
  background: "#FFFFFF", // White background
}

export default function AIGenerationScreen() {
  const [image, setImage] = useState<string | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigation = useNavigation()

  // Function to pick image from gallery
  const pickImage = () => {
    launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker")
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage)
        Alert.alert("Error", "There was an error selecting the image")
      } else if (response.assets && response.assets[0]?.uri) {
        setImage(response.assets[0].uri)
      }
    })
  }

  // Function to take a photo with camera
  const takePhoto = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
      saveToPhotos: true,
      includeBase64: false,
    }

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled camera")
      } else if (response.errorCode) {
        console.log("Camera Error: ", response.errorMessage)
        Alert.alert("Error", "There was an error with the camera")
      } else if (response.assets && response.assets[0]?.uri) {
        setImage(response.assets[0].uri)
      }
    })
  }

  // Function to simulate image processing and navigate to the next screen
  const handleSubmit = () => {
    if (!image) {
      Alert.alert("Missing Image", "Please upload or take a photo first!")
      return
    }

    setIsModalVisible(true)

    // Simulating processing delay
    setTimeout(() => {
      setIsModalVisible(false)
      navigation.navigate("AIGenerationResult")
    }, 3000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
      <View style={{ flex: 1, padding: 16 }}>
        <HeaderGreen />

        <Text style={{ fontSize: 22, fontWeight: "600", color: THEME.text, marginTop: 20, marginBottom: 4 }}>
          <Text style={{ color: THEME.primary }}>Upload </Text>a photo of yourself
        </Text>

        <Text style={{ fontSize: 14, color: THEME.lightText, marginBottom: 24 }}>
          Upload your photo or take a new one to see the AI-generated results.
        </Text>

        {/* Image Upload Options */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }}>
          {/* Gallery Picker */}
          <TouchableOpacity
            onPress={pickImage}
            style={{
              backgroundColor: THEME.secondary,
              padding: 16,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              marginRight: 8,
              borderWidth: 1,
              borderColor: THEME.primary,
            }}
          >
            <ImageIcon size={24} color={THEME.background} style={{ marginBottom: 8 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Gallery</Text>
          </TouchableOpacity>

          {/* Camera Button */}
          <TouchableOpacity
            onPress={takePhoto}
            style={{
              backgroundColor: THEME.secondary,
              padding: 16,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              marginLeft: 8,
              borderWidth: 1,
              borderColor: THEME.primary,
            }}
          >
            <Camera size={24} color={THEME.background} style={{ marginBottom: 8 }} />
            <Text style={{ color: 'white', fontSize: 16 }}>Camera</Text>
          </TouchableOpacity>
        </View>

        {/* Show uploaded/captured image */}
        {image ? (
          <View style={{ alignItems: "center", marginBottom: 24 }}>
            <Image source={{ uri: image }} style={{ width: 280, height: 280, borderRadius: 12 }} resizeMode="cover" />
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={{
                marginTop: 12,
                backgroundColor: THEME.primary,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white" }}>Remove Image</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderStyle: "dashed",
              borderColor: THEME.primary,
              borderRadius: 12,
              width: 280,
              height: 280,
              marginBottom: 24,
              alignSelf: "center",
            }}
          >
            <Text style={{ color: THEME.lightText, textAlign: "center", paddingHorizontal: 16 }}>
              Your image will appear here after uploading or taking a photo
            </Text>
          </View>
        )}

        <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <ActivityIndicator size="large" color={THEME.primary} />
            <Text style={{ color: "white", marginTop: 16 }}>Processing your AI generated image...</Text>
          </View>
        </Modal>

        <View style={{ marginTop: "auto", marginBottom: 24 }}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: THEME.primary,
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

