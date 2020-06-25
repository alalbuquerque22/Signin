import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import GradientButton from "react-native-gradient-buttons";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Create() {
  return (
    <View style={styles.container}>
      {/* titulo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Insira seus dados</Text>
      </View>

      {/* botoes */}
      <View style={styles.button}>
        <TextInput
          style={styles.buttonInput}
          placeholder="Nome"
          placeholderTextColor="#999999"
        />

        <TextInput
          style={styles.buttonInput}
          placeholder="CPF"
          placeholderTextColor="#999999"
        />
        <TextInput
          style={styles.buttonInput}
          placeholder="Email"
          placeholderTextColor="#999999"
          autoCompleteType="email"
        />
        <View style={styles.buttonInputTel}>
          <Text>Numero de Telefone</Text>
          <TextInput
            style={styles.buttonInput}
            placeholder="DDD"
            placeholderTextColor="#999999"
          />
          <TextInput
            style={styles.buttonInput}
            placeholder="Contato"
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.buttonInputEnd}>
          <Text>Endereco</Text>
          <TextInput
            style={styles.buttonInput}
            placeholder="Rua"
            placeholderTextColor="#999999"
          />
          <TextInput
            style={styles.buttonInput}
            placeholder="Complemento"
            placeholderTextColor="#999999"
          />
          <TextInput
            style={styles.buttonInput}
            placeholder="cidade"
            placeholderTextColor="#999999"
          />
          <TextInput
            style={styles.buttonInput}
            placeholder="estado"
            placeholderTextColor="#999999"
          />
          <TextInput
            style={styles.buttonInput}
            placeholder="cep"
            placeholderTextColor="#999999"
            autoCompleteType="postal-code"
          />
        </View>
        <TextInput
          style={styles.buttonInput}
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
