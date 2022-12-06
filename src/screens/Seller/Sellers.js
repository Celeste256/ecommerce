import React from "react";
import { View, Text } from "react-native";

const Sellers = () => {
  return (
    <View style={styles.container}>
      <Text>Vendedores</Text>
    </View>
  );
};

export { Sellers };

const syles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
