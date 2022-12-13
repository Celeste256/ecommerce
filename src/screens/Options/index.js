import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'


const Options = () => {
    return(
        <View>
            <View style={styles.container}>
            </View>
            <View style={{heigth:'100%'}}>
                <View style={styles.mainBar}>
                    <View style={styles.barContainer}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                            name={'account-circle'}
                            size={80}
                            color={'white'}
                            />
                        </TouchableOpacity>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleBar}>John Doe</Text>
                            <Text style={styles.titleBar}>contact@exemple.com</Text>
                            <View style={styles.container}>
                            </View>
                        </View> 
                    </View>
                </View>
            </View>
            <View style={styles.whiteBar}>
                <Text style={styles.selectedTitle}>Meus Pedidos</Text>
            </View>
            <View style={styles.whiteBar}>
                <Text style={styles.title}>Meus Dados</Text>
            </View>
            <View style={styles.whiteBar}>
                <Text style={styles.title}>Sair</Text>
            </View>
        </View>
    )
}

export {Options}

const styles = StyleSheet.create({
    container:{
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