import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Leaderboards from "./Leaderboards";
import Settings from "./Settings";
import { colors } from "../styles/base";
import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";
import MixUp from "../assets/Mix_Up.png";

const Tab = createBottomTabNavigator();

const DashboardHome = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Select a Mode</Text>
        <TouchableOpacity
          style={[styles.modeButton, { backgroundColor: "#A038B1" }]}
          onPress={() => {
            route.params.rootNavigation.navigate("Lesson", {
              mode: "Fact or Opinion",
            });
          }}
        >
          <Text style={styles.modeButtonText}>Fact</Text>
          <View
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: colors.secondary.purple,
              marginHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              Or
            </Text>
          </View>
          <Text style={styles.modeButtonText}>Opinion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modeButton,
            { backgroundColor: "#2068B7", marginTop: 8 },
          ]}
          onPress={() => {
            route.params.rootNavigation.navigate("Lesson", {
              mode: "Evidence or Not",
            });
          }}
        >
          <Text style={styles.modeButtonText}>Evidence</Text>
          <View
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: colors.secondary.purple,
              marginHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              Or
            </Text>
          </View>
          <Text style={styles.modeButtonText}>Not</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modeButton,
            { backgroundColor: "#35C3E9", marginTop: 8 },
          ]}
          onPress={() => {
            route.params.rootNavigation.navigate("Lesson", {
              mode: "Ad or Not",
            });
          }}
        >
          <Text style={styles.modeButtonText}>Ad</Text>
          <View
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: colors.secondary.purple,
              marginHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              Or
            </Text>
          </View>
          <Text style={styles.modeButtonText}>Not</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.modeButton,
            { backgroundColor: "#6932EB", marginTop: 8 },
          ]}
          onPress={() => {
            route.params.rootNavigation.navigate("Lesson", {
              mode: "News or Opinion",
            });
          }}
        >
          <Text style={styles.modeButtonText}>News</Text>
          <View
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: colors.secondary.purple,
              marginHorizontal: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              Or
            </Text>
          </View>
          <Text style={styles.modeButtonText}>Opinion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mixUpMode, { marginTop: 8 }]}>
          <ImageBackground source={MixUp} style={styles.mixModeImage}>
            <FontAwesome
              name="lock"
              size={32}
              color="#164F66"
              style={{ marginTop: -32, marginBottom: 4 }}
            />
            <Text style={styles.mixUpModeText}>Mix-Up {"\n"} Mode</Text>
            <Text
              style={{
                position: "absolute",
                bottom: 8,
                color: "white",
                fontSize: 12,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                padding: 4,
                borderRadius: 4,
              }}
            >
              Complete the 4 challenges above to unlock
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <OpacityButton
          buttonType="custom"
          buttonStyles={styles.forgotPassword}
          buttonText={styles.forgotPasswordText}
        >
          Learn more about the News Literacy Project
        </OpacityButton>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default function Dashboard({ navigation }) {
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
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Leaderboards"
        component={Leaderboards}
        options={{ headerShown: false }}
        initialParams={{ rootNavigation: navigation }}
      />
      <Tab.Screen
        name="Home"
        component={DashboardHome}
        options={{ headerShown: false }}
        initialParams={{ rootNavigation: navigation }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
        initialParams={{ rootNavigation: navigation }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292851",
  },
  scrollView: {
    backgroundColor: "#292851",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
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
    marginBottom: 32,
    fontWeight: "bold",
  },
  modeButton: {
    backgroundColor: colors.tertiary,
    width: "100%",
    maxWidth: 308,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modeButtonText: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  mixUpMode: {
    backgroundColor: colors.primary.teal,
    width: "100%",
    maxWidth: 308,
    height: 220,
    borderRadius: 8,
  },
  mixUpModeText: {
    fontSize: 28,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  mixModeImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
