import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
    </View>
  );
};

export { Products };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
