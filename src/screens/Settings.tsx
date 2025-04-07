"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, Alert, Modal, StyleSheet } from "react-native"
import { User, Mail, Phone, ChevronRight, Check, LogOut } from "lucide-react-native"
import HeaderGreen from "../components/layout/HeaderGreen"
import { SafeAreaView } from "react-native-safe-area-context"

// Theme colors
const THEME = {
  primary: "#0A4F20", // Green
  secondary: "#E8F5E9", // Light green
  text: "#333333", // Dark text
  lightText: "#666666", // Secondary text
  background: "#FFFFFF", // White background
}

// Mock user data - replace with actual user data from your auth system
const userData = {
  name: "John Smith",
  email: "john.smith@example.com",
  phone: "+1 (555) 123-4567",
  team: "Peshawar Zalmi",
}

// Team options
const teamOptions = [
  { label: "Peshawar Zalmi", value: "peshawar_zalmi" },
  { label: "Karachi Kings", value: "karachi_kings" },
  { label: "Islamabad United", value: "islamabad_united" },
  { label: "Lahore Qalanders", value: "lahore_qalanders" },
  { label: "Quetta Gladiators", value: "quetta_gladiators" },
  { label: "Multan Sultans", value: "multan_sultans" },
]

export default function SettingsScreen() {
  const [selectedTeam, setSelectedTeam] = useState(userData.team)
  const [showTeamModal, setShowTeamModal] = useState(false)

  const handleTeamSelect = (teamName) => {
    setSelectedTeam(teamName)
    setShowTeamModal(false)

    // Show success alert
    Alert.alert("Team Updated", `Your team has been updated to ${teamName}`, [{ text: "OK" }])
  }

  return (
    <SafeAreaView style={styles.container}>
    

      <ScrollView style={styles.scrollView}>
      <HeaderGreen />
        <Text style={styles.title}>Settings</Text>

        {/* User Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <User size={40} color={THEME.primary} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userTeam}>{selectedTeam}</Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <View style={styles.infoItem}>
            <Mail size={20} color={THEME.primary} style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userData.email}</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Phone size={20} color={THEME.primary} style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>{userData.phone}</Text>
            </View>
          </View>
        </View>

        {/* Team Selection */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Team Preferences</Text>

          <TouchableOpacity style={styles.optionButton} onPress={() => setShowTeamModal(true)}>
            <View style={styles.optionContent}>
              <Text style={styles.optionLabel}>Your Team</Text>
              <Text style={styles.optionValue}>{selectedTeam}</Text>
            </View>
            <ChevronRight size={20} color={THEME.lightText} />
          </TouchableOpacity>
        </View>

        {/* Account Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color="#FF3B30" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Team Selection Modal */}
      <Modal
        visible={showTeamModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowTeamModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Your Team</Text>

            <ScrollView style={styles.modalScrollView}>
              <View style={styles.teamOptionsContainer}>
                {teamOptions.map((team) => (
                  <TouchableOpacity
                    key={team.value}
                    style={[styles.teamOption, selectedTeam === team.label && styles.teamOptionSelected]}
                    onPress={() => handleTeamSelect(team.label)}
                  >
                    <Text style={[styles.teamOptionText, selectedTeam === team.label && styles.teamOptionTextSelected]}>
                      {team.label}
                    </Text>

                    {selectedTeam === team.label && <Check size={20} color="white" />}
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setShowTeamModal(false)}>
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: THEME.background,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.text,
    marginTop: 20,
    marginBottom: 24,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.secondary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 2,
    borderColor: THEME.primary,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.text,
    marginBottom: 4,
  },
  userTeam: {
    fontSize: 16,
    color: THEME.primary,
    fontWeight: "500",
  },
  sectionContainer: {
    marginBottom: 24,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: THEME.text,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  infoIcon: {
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: THEME.lightText,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: THEME.text,
    fontWeight: "500",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  optionContent: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    color: THEME.text,
    marginBottom: 4,
  },
  optionValue: {
    fontSize: 14,
    color: THEME.primary,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  logoutIcon: {
    marginRight: 16,
  },
  logoutText: {
    fontSize: 16,
    color: "#FF3B30",
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.text,
    marginBottom: 20,
    textAlign: "center",
  },
  modalScrollView: {
    maxHeight: 400,
  },
  teamOptionsContainer: {
    marginBottom: 20,
  },
  teamOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
  },
  teamOptionSelected: {
    backgroundColor: THEME.primary,
  },
  teamOptionText: {
    fontSize: 16,
    fontWeight: "500",
    color: THEME.text,
  },
  teamOptionTextSelected: {
    color: "white",
  },
  modalCloseButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    marginTop: 10,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: THEME.text,
  },
})

