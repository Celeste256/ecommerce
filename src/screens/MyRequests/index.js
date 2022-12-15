import React from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Responsive from "react-native-lightweight-responsive"

const MyRequests = () => {
    return(
        <View style={styles.container}>
            <View style={styles.mainBar}>
                <TouchableOpacity style={styles.vector}>
                    <MaterialCommunityIcons
                    name={'arrow-left'}
                    size={20}
                    color={'#FFFFFF'}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.titleHeader}>Meus Pedidos</Text>
                </View>
            </View>
            <View style={styles.secundaryBar}>
                <Text style={styles.titleBar}>Pedido #123456 | Data: 12/12/99</Text>
                <Text style={styles.titleBar}>Vendedor: Vendedor TOP</Text>
                <Text style={styles.titleBar}>Valor: R$ 9,99</Text>
            </View>
            <View style={styles.whiteBar}>
                <View>
                    <Text style={styles.title}>Pedido #123456 | Data: 12/12/99</Text>
                    <Text style={styles.title}>Vendedor: Vendedor TOP</Text>
                    <Text style={styles.title}>Valor: R$ 9,99</Text>
                </View>
            </View>
            <View style={styles.whiteBar}>
                <View>
                    <Text style={styles.title}>Pedido #123456 | Data: 12/12/99</Text>
                    <Text style={styles.title}>Vendedor: Vendedor TOP</Text>
                    <Text style={styles.title}>Valor: R$ 9,99</Text>
                </View>
            </View>
            
        </View>
        
    )}

export {MyRequests}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        marginVertical: Responsive.font(24),
    },
    mainBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: "#2296f3",
        padding: Responsive.font(10)
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
        padding: Responsive.font(15)
    },
    titleBar: {
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#FFFFFF"
    },
    title: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    vector: {
        padding: Responsive.font(5),
    }
})