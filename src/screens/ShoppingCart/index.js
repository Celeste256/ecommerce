import React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MyCard } from "../../components/Form/MyCard";


const ShoppingCart = () => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <MyCard>
                <Text>Oioiiiiii</Text>
            </MyCard>
            
        </View>
    </View>
  );
};

export { ShoppingCart };

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: "center",
        marginVertical: Responsive.font(24),
    },
    barContainer:{
        flexDirection:"row",
        marginVertical: Responsive.font(4),
        padding: Responsive.font(15)
    },
    mainBar: {
        width: '80%',
        backgroundColor: "#2296f3",
        flexDirection: "row",
        justifyContent: "flex-start",
        
    },
    secundaryBar: {
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: "#42a4f4",
        padding: Responsive.font(15)
    },
    titleHeader: {
        alignItems: "center",
        justifyContent: "flex-start",
        padding: Responsive.font(5),
        color: "#FFFFFF",
    },
    whiteBar: {
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: Responsive.font(10),
        marginVertical: Responsive.font(10)
    },
    titleBar: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        color: "#FFFFFF",
        padding: Responsive.font(5)
    },
    title: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    selectedTitle:{
        alignItems: "center",
        justifyContent: "flex-start",
        color:"#44adf6"
    },
    vector: {
        padding: Responsive.font(5),
    }
})