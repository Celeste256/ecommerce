import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Sellers = () => {
  return (
    <View style={styles.container}>
      <Text>Vendedores</Text>
    </View>
  );
};

export { Sellers };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
