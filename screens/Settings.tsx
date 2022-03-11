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

export default function Settings({ navigation }) {
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
      <Text style={styles.title}>Account Settings</Text>
      <View
        style={{
          width: 117,
          height: 117,
          borderRadius: 99999,
          backgroundColor: colors.primary.teal,
          borderWidth: 2,
          borderColor: "white",
        }}
      ></View>
      <OpacityButton
        buttonType="custom"
        buttonStyles={styles.forgotPassword}
        buttonText={styles.forgotPasswordText}
      >
        Select Avatar
      </OpacityButton>

      <Text
        style={{
          color: "white",
          width: "100%",
          textAlign: "center",
          fontSize: 24,
          marginTop: 16,
        }}
      >
        Username123
      </Text>
      <Text
        style={{
          color: "white",
          width: "100%",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        emailaddress@gmail.com
      </Text>
      <View style={{ marginTop: 32 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: 308,
        }}
      >
        <Text
          style={{
            backgroundColor: "white",
            color: "black",
            flex: 1,
            padding: 8,
          }}
        >
          Username
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Username123"
          textContentType="emailAddress"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: 308,
          borderTopColor: "gainsboro",
          borderTopWidth: 1,
        }}
      >
        <Text
          style={{
            backgroundColor: "white",
            color: "black",
            flex: 1,
            padding: 8,
          }}
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="emailaddress@gmail.com"
          textContentType="emailAddress"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: 308,
          borderTopColor: "gainsboro",
          borderTopWidth: 1,
        }}
      >
        <Text
          style={{
            backgroundColor: "white",
            color: "black",
            flex: 1,
            padding: 8,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          textContentType="password"
        />
      </View>

      <OpacityButton
        buttonType="fill"
        buttonStyles={{
          marginTop: 16,
        }}
      >
        Log Out
      </OpacityButton>
      <OpacityButton
        buttonType="custom"
        buttonStyles={styles.forgotPassword}
        buttonText={styles.forgotPasswordText}
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
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "white",
    flex: 3,
    maxWidth: 308,
    padding: 8,
    color: colors.secondary.slateBlue,
    fontSize: 16,
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
