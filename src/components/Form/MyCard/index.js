import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import theme from "../../../global/style/theme";

const MyCard = ({ name, btnColor, title, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <FontAwesome5 name="twitter" size={24} color="#FFF" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { MyCard };

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: theme.colors.primary,
    padding: Responsive.font(8),
    borderRadius: Responsive.font(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: Responsive.font(16),
  },
  title: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: Responsive.font(16),
  },
});
