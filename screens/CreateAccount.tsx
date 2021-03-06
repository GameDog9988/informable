import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";

export default function CreateAccount({ navigation }) {
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
      <Text style={styles.title}>Create an Account</Text>
      <OpacityButton
        buttonType="outline"
        icon={<FontAwesome name="google" size={24} color="#00B2A9" />}
      >
        Sign up with Google
      </OpacityButton>
      <Text style={{ color: "white", marginVertical: 8 }}>or</Text>
      <OpacityButton buttonType="fill">Sign up with Email</OpacityButton>
      <Text
        style={{
          color: "white",
          marginVertical: 8,
          width: "100%",
          maxWidth: 200,
          textAlign: "center",
          fontSize: 10,
          marginTop: 16,
        }}
      >
        By creating an account you agree to our Terms of Service and Privacy
        Policy.
      </Text>
      <OpacityButton
        buttonType="custom"
        buttonStyles={styles.alreadyHaveAnAccount}
        buttonText={styles.alreadyHaveAnAccountText}
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account?
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
  signUpGoogle: {
    backgroundColor: "#00B2A9",
    width: "100%",
    maxWidth: 308,
    padding: 8,
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
    borderColor: "#004F71",
    borderStyle: "solid",
    marginTop: 16,
    fontSize: 16,
  },
  createAccountButtonText: {
    textAlign: "center",
    color: "#004F71",
    fontSize: 16,
    fontWeight: "bold",
  },
  alreadyHaveAnAccount: {
    position: "absolute",
    bottom: 100,
  },
  alreadyHaveAnAccountText: {
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
