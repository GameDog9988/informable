import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Image from "react-native-scalable-image";

import { colors } from "../styles/base";
import OpacityButton from "../components/OpacityButton";

import RobertDowney from "../assets/robertDowneyJr.png";
import NLPLogo from "../assets/NLP_Logo.png";

export default function Lesson({ navigation, route }) {
  console.log(route);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "relative",
          width: 329,
          marginBottom: 8,
          paddingTop: 48,
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", top: 8, right: 0 }}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <Ionicons name="ios-close-circle" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{route.params.mode}?</Text>
        <FontAwesome
          name="twitter"
          size={24}
          color="white"
          style={{ padding: 4 }}
        />
        <View style={styles.imageContainer}>
          <Image source={RobertDowney} width={321} />
        </View>
      </View>

      {/* </View> */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50%",
          height: 64,
          backgroundColor: "#2CD5C4",
          padding: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Fact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: 64,
          backgroundColor: "#11B7AE",
          padding: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Opinion
        </Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7E2792",
    alignItems: "center",
    // justifyContent: "center",
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
  imageContainer: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 48,
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
