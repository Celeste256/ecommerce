import React from "react";
import { View, Text, StyleSheet, TextInput,  } from "react-native";
import { MyInput } from "../../components/Form/MyInput";
import { MyPlaceholder } from "../../components/Form/MyPlaceholder";
import theme from "../../global/style/theme";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
    </View>
  );
};

export { Categories };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  social: {
    flexDirection: "row",
  },
  inputTitle: {
    fontSize: Responsive.font(14),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});
