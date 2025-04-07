import React from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function DropdownOnboarding({
  data,
  selectedValue,
  onValueChange,
  placeholder,
  backgroundColor,
  textColor, // Added textColor prop
  placeholderColor, // Added placeholderColor prop
}) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor || "#fff" }]}>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onChange={(item) => onValueChange(item.value)}
        placeholder={placeholder?.label || "Select an option"}
        style={styles.dropdown}
        selectedTextStyle={[styles.selectedText, { color: textColor || "#000" }]} // Apply text color
        placeholderStyle={[styles.placeholder, { color: placeholderColor || "#B0B0B0" }]} // Apply placeholder color
        containerStyle={styles.dropdownContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  dropdown: {
    fontSize: 16,
    paddingVertical: 12,
  },
  selectedText: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#FEC7D7",
    borderRadius: 10,
  },
});
