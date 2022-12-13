import React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Responsive from "react-native-lightweight-responsive";
import { MyButton } from "../../../components/Form/MyButton";
import { MyInput } from "../../../components/Form/MyInput";
import { MyPlaceholder } from "../../../components/Form/MyPlaceholder";
import { SocialButton } from "../../../components/Form/SocialButton";
import theme from "../../../global/style/theme";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Login = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignItems: "center", padding: 30}}>
        <MaterialCommunityIcons
        name={'cloud'}
        size={80}
        color={'#d9dfe5'}
        />
        <Text style={styles.logoText}
        >O Marketplace</Text>  
      </TouchableOpacity>
      <Text style={styles.title}>Entrar</Text>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>Email</Text>
        <MyInput placeholder="exemple@email.com" />
        <Text style={styles.inputTitle}>Password</Text>
          <MyInput />
          <TouchableOpacity style={styles.btnEye}>
            <MaterialCommunityIcons
            name={'eye'}
            size={20}
            color={'#afb9c7'}
            />
          </TouchableOpacity>
        <MyPlaceholder title="Entrar" />
        <View style={{ alignItems: "center", padding: 6, top: 8}}>
          <Text style={styles.subTitle}>ou acesse com suas redes sociais</Text>
        </View>
        <View style={styles.social}>
          <SocialButton name="twitter" title="Twitter" />
          <SocialButton name="facebook" title="Facebook" btnColor="" />
        </View>
        <View style={styles.social}>
          <Text style={styles.subTitle}>Não tem conta?</Text>
          <Text style={styles.inputTitle}>Criar Conta</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText:{
    color: '#afb9c7',
    fontSize: Responsive.font(15),
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: Responsive.font(26),
    color: theme.colors.title,
    fontWeight: "bold",
  },
  inputTitle: {
    fontSize: Responsive.font(14),
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    justifyContent: "center",
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
});

export { Login };
