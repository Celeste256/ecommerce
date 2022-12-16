import React from "react"
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Button} from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Responsive from "react-native-lightweight-responsive"
import theme from "../../global/style/theme";
import { MyButton } from "../../components/Form/MyButton";

const ProductInfos = () => {
return(
    <View>
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
                        <Text style={styles.titleHeader}>Nome do Produto</Text>
                    </View>
            </View>
            <View style={styles.imgBorder}>
                <Image
                source={require('./icon.png')}
                style={styles.image}
                />
            </View>
            <View style={styles.titleProduct}>
                <Text style={styles.title}>Nome do Produto</Text>
                <View style={styles.card}>
                    <View style={styles.cardTitle}>
                        <Text>Categoria</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.title}>R$ 9,99</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>Vendido por: Vendedor TOP</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>Entregar no endereço: Exibir o endereço cadastrado na conta do usuário</Text>
            </View>
            <View style={styles.button}>
                <Button title="Adicionar" color="#2596be"/>
            </View>
        </View>
    </View>
)
}

export {ProductInfos}

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
    },
    title: {
        fontSize: Responsive.font(16),
        color: "#000",
        fontWeight: "bold",
        padding: Responsive.font(12),
        
      },
    subTitle: {
        fontSize: Responsive.font(12),
        color: "#595959",
        padding: Responsive.font(12)
    },
    button: {
        padding: Responsive.font(12),
    },
    titleProduct: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: null,
        resizeMode: 'contain',
        height: 220,
        borderStyle: 'solid',
    },
    imgBorder: {
        borderWidth: 1,
        borderColor: 'theme.colors.subTitle',
        padding: Responsive.font(12),
        marginVertical: Responsive.font(10),
        marginHorizontal: Responsive.font(10),
        borderRadius: 5

    },
    card: {
        alignItems:"center",
        backgroundColor: "#d9d9d9",
        width: 120,
        borderRadius: 50,
        padding: Responsive.font(10),
        marginHorizontal: Responsive.font(20)
    },
    cardTitle: {
        justifyContent:"center"
    }
})