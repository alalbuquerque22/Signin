import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import GradientButton from "react-native-gradient-buttons";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Realizar logon</Text>
      </View>
      <View style={styles.boxImg}>
        <Image source={logoImg}></Image>
      </View>
      {/* botoes */}
      <View style={styles.button}>
        <TextInput
          style={styles.form}
          placeholder="Usuario"
          placeholderTextColor="#999999"
        />

        <TextInput
          style={styles.form}
          placeholder="Senha"
          placeholderTextColor="#999999"
          autoCompleteType="password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginsButton} onPress={() => {}}>
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
            <Text style={styles.actionText}>Go</Text>
            <Feather name="arrow-right" size={21} color="#FFFFFF" />
          </GradientButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}
