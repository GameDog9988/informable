import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Leaderboards from "./Leaderboards";
import Settings from "./Settings";

import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";
import { colors } from "../styles/base";

const Tab = createBottomTabNavigator();

const DashboardHome = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#014E6F", "#223054"]}
        style={styles.gradientBackground}
      />
      <Text style={styles.title}>Select a Mode</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor amit.</Text>
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
};

export default function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "gear";
          } else if (route.name === "Leaderboards") {
            iconName = "trophy";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary.teal,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Leaderboards" component={Leaderboards} />
      <Tab.Screen
        name="Home"
        component={DashboardHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
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
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
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
