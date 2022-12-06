import React from "react";
import { View, Text } from "react-native";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
    </View>
  );
};

export { Categories };

const syles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
