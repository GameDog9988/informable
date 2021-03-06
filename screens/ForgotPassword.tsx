import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import { colors } from "../styles/base";
import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#014E6F", "#223054"]}
        style={styles.gradientBackground}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="chevron-left" size={24} color="gainsboro" />
      </TouchableOpacity>
      <Text style={styles.title}>Forgot Password</Text>
      <Text
        style={{
          color: "white",
          width: "100%",
          maxWidth: 308,
          textAlign: "center",
          fontSize: 18,
          marginTop: -32,
          marginBottom: 32,
        }}
      >
        Please enter the email address associated with your Informable account.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        textContentType="emailAddress"
      />
      <OpacityButton
        buttonType="fill"
        buttonStyles={{
          marginTop: 16,
        }}
      >
        Reset password
      </OpacityButton>
      <OpacityButton
        buttonType="custom"
        buttonStyles={styles.dontHaveAnAccount}
        buttonText={styles.dontHaveAnAccountText}
        onPress={() => navigation.navigate("Create Account")}
      >
        Don't have an account?
      </OpacityButton>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  informableLogo: {
    width: 118,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    opacity: 0.75,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: 64,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.secondary.slateBlue,
    borderStyle: "solid",
    color: colors.secondary.slateBlue,
    fontSize: 16,
    textAlign: "center",
  },
  logInButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.secondary.slateBlue,
    borderStyle: "solid",
    marginTop: 16,
    fontSize: 16,
  },
  createAccountButtonText: {
    textAlign: "center",
    color: colors.secondary.slateBlue,
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
  },
  dontHaveAnAccount: {
    position: "absolute",
    bottom: 100,
  },
  dontHaveAnAccountText: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
  },
  newsLitImage: {
    width: 97,
    height: 82,
    marginTop: 32,
  },
});
