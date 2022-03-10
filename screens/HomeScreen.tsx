import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../styles/base";
import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#014E6F", "#223054"]}
          style={styles.gradientBackground}
        />
        <Image source={InformableLogo} style={styles.informableLogo} />
        <Text style={styles.title}>informable</Text>
      </View>
      <View style={styles.container}>
        <OpacityButton
          buttonType="fill"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Log In
        </OpacityButton>
        <OpacityButton
          buttonType="outline"
          onPress={() => {
            navigation.navigate("Create Account");
          }}
          buttonStyles={{ marginTop: 16 }}
        >
          Create an Account
        </OpacityButton>
        <OpacityButton
          buttonType="custom"
          buttonText={styles.playAsGuestButtonText}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          Play as a Guest
        </OpacityButton>
        <Image source={NLPLogo} style={styles.newsLitImage} />
        <StatusBar style="light" />
      </View>
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
  titleContainer: {
    backgroundColor: colors.secondary.seaBlue,
    width: "100%",
    padding: 16,
    maxHeight: 300,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  informableLogo: {
    width: 118,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  logInButton: {
    backgroundColor: colors.primary.teal,
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderRadius: 4,
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
    borderRadius: 4,
  },
  createAccountButtonText: {
    textAlign: "center",
    color: colors.secondary.slateBlue,
    fontSize: 16,
  },
  playAsGuestButtonText: {
    textAlign: "center",
    color: colors.secondary.slateBlue,
    textDecorationLine: "underline",
    fontSize: 16,
    marginTop: 32,
  },
  newsLitImage: {
    width: 97,
    height: 82,
    marginTop: 32,
  },
});
