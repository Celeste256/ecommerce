import React from "react";
import { View, Text } from "react-native";

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
    </View>
  );
};

export { Products };

const syles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
