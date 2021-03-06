import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import GradientButton from "react-native-gradient-buttons";
import { Text, View, Image, TouchableOpacity } from "react-native";
import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  const navigation = useNavigation();
  function navigateToLogin() {
    navigation.navigate("Login"); // funcao para chamar a pagina de login
  }
  function navigateToCreate() {
    navigation.navigate("Create"); // funcao para chamar a tela de cadastro
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Modelo de Login!</Text>
      </View>
      <View style={styles.boxImg}>
        <Image source={logoImg}></Image>
      </View>

      {/* botao */}
      <View style={styles.button}>
        <TouchableOpacity style={styles.loginsButton} onPress={navigateToLogin}>
          <GradientButton
            style={{ marginVertical: 0 }}
            textStyle={{ fontSize: 21 }}
            gradientBegin="#FFAE88"
            gradientEnd="#8F93EA" //5FD3FF
            gradientDirection="horizontal"
            height={60}
            width={300}
            radius={35}
            impact
            impactStyle="Light"
          >
            <Text style={styles.actionText}>Sign In</Text>
            <Feather name="arrow-right" size={21} color="#FFFFFF" />
          </GradientButton>
        </TouchableOpacity>
      </View>
      <View style={styles.createBox}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={navigateToCreate}
        >
          <Text style={styles.textCreate}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
