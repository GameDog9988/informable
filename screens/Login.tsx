import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../styles/base";

import OpacityButton from "../components/OpacityButton";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#014E6F", "#223054"]}
        style={styles.gradientBackground}
      />
      <Text style={styles.title}>Login</Text>
      <OpacityButton
        buttonType="outline"
        icon={<FontAwesome name="google" size={24} color="#00B2A9" />}
      >
        Sign up with Google
      </OpacityButton>
      <Text style={{ color: "white", marginVertical: 8 }}>or</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        textContentType="emailAddress"
      />
      <TextInput
        style={[styles.input, { marginTop: 4 }]}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        textContentType="password"
      />
      <OpacityButton
        buttonType="fill"
        buttonStyles={{
          marginTop: 16,
        }}
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
      >
        Log in
      </OpacityButton>
      <OpacityButton
        buttonType="custom"
        buttonStyles={styles.forgotPassword}
        buttonText={styles.forgotPasswordText}
        onPress={() => {
          navigation.navigate("Forgot Password");
        }}
      >
        Forgot password?
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
  title: {
    fontSize: 32,
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: 48,
  },
  logInButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
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
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    textAlign: "center",
    color: "white",
    textDecorationLine: "underline",
    fontSize: 16,
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
  },
  newsLitImage: {
    width: 97,
    height: 82,
    marginTop: 32,
  },
});
