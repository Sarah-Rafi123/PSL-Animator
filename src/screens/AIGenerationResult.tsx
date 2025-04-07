import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import { Share2, Download, Play } from "lucide-react-native"
import HeaderGreen from "../components/layout/HeaderGreen"
// Green color theme (same as previous screen)
const THEME = {
  primary: "#0A4F20", // Green
  secondary: "#0A4F20", // Light green
  text: "#333333", // Dark text
  lightText: "#666666", // Secondary text
  background: "#FFFFFF", // White background
}

const AIGenerationResult = () => {
  const handleAnimate = () => {
    // Add animation logic here
    console.log("Let's Animate Button Pressed")
  }

  const handleDownload = () => {
    // Add download logic here
    console.log("Download Button Pressed")
  }

  const handleShare = () => {
    // Add share logic here
    console.log("Share Button Pressed")
  }

  return (
    <SafeAreaView style={styles.safeArea}>
         <View style={{ flex: 1, padding: 16 }}>
        <HeaderGreen/>
      <View style={styles.container}>
        <Text style={styles.title}>Your AI Generated Result</Text>

        <View style={styles.imageContainer}>
          <Image source={require("../assets/images/pic1.png")} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: THEME.primary }]} onPress={handleAnimate}>
            <Play size={20} color="white" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Let's Animate</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: THEME.primary }]} onPress={handleDownload}>
            <Download size={20} color="white" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: THEME.primary }]} onPress={handleShare}>
            <Share2 size={20} color="white" style={{ marginRight: 8 }} />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Your image has been successfully processed with our AI technology</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: THEME.text,
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    width: 320,
    height: 320,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: THEME.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: THEME.primary,
  },
  image: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    fontSize: 14,
    color: THEME.lightText,
    textAlign: "center",
    marginTop: 10,
  },
})

export default AIGenerationResult

