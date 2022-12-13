import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { MyInput } from "../../../components/Form/MyInput";
import { MyPlaceholder } from "../../../components/Form/MyPlaceholder";
import theme from "../../../global/style/theme";


const CreateAcc = () => {
    return(
        
        <View>
            <View style={styles.container}>
            </View>
            <Text style={styles.title}>Criar conta/ Editar dados</Text>
            <View style={styles.form}>           
                <View>
                    <Text style={styles.inputTitle}>Nome</Text>
                    <MyInput/>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Rua</Text>
                    <MyInput/>
                </View>
                <View style={styles.verticalItems}>
                    <View>
                        <Text style={styles.inputTitle}>Numero</Text>
                        <MyInput style={{width: 120}}/>
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Bairro</Text>
                        <MyInput style={{width: 200}}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Email</Text>
                    <MyInput/>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Senha</Text>
                    <MyInput/>
                </View>
            </View>
            <View style={styles.form}>
                <MyPlaceholder title="Entrar" />
            </View>
            
        </View>
    )
}

export {CreateAcc}

const styles = StyleSheet.create({
    logoText:{
        color: '#afb9c7',
        fontSize: Responsive.font(15),
        fontWeight: "bold"
      },
      container: {
        justifyContent: "center",
        marginVertical: Responsive.font(15),
      },
      title: {
        fontSize: Responsive.font(26),
        color: theme.colors.title,
        fontWeight: "bold",
        padding: Responsive.font(26)
      },
      inputTitle: {
        fontSize: Responsive.font(14),
        color: theme.colors.primary,
        fontWeight: "bold",
      },
      form: {
        width: "100%",
        justifyContent: "flex-start",
        padding: Responsive.font(24),
      },
      input: {
        width: "100%",
        borderBottomWidth: Responsive.font(1),
        paddingVertical: Responsive.font(2),
        fontSize: Responsive.font(13),
        borderColor: theme.colors.subtitle,
        marginBottom: Responsive.font(16),
      },
      subTitle: {
        fontSize: Responsive.font(14),
        color: theme.colors.subtitle,
      },
      verticalItems: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    
      },
      social: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
      },
      btnEye: {
        position: "absolute",
        right: 35,
        top: 195
      }
})