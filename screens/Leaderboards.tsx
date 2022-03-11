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
  FlatList,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import { colors } from "../styles/base";
import OpacityButton from "../components/OpacityButton";

import InformableLogo from "../assets/Informable_Logo.png";
import NLPLogo from "../assets/NLP_Logo.png";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Username123",
    rank: 1,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Username123",
    rank: 2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Username123",
    rank: 3,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    title: "Username123",
    rank: 4,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
    title: "Username123",
    rank: 5,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Username123",
    rank: 6,
  },
];

const Item = ({ title, rank }) => (
  <View style={styles.leaderboardItem}>
    <Text style={{ flex: 0.5 }}>{rank}</Text>
    <View style={{ flexDirection: "row", alignItems: "center", flex: 3 }}>
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 9999,
          backgroundColor: colors.primary.purple,
        }}
      />
      <Text style={{ marginLeft: 8 }}>{title}</Text>
    </View>
    <Text style={{ flex: 1 }}>10:55</Text>
    <Text style={{ flex: 1 }}>3,100</Text>
  </View>
);

export default function Leaderboards({ navigation }) {
  const [email, setEmail] = useState("");

  const renderItem = ({ item }) => <Item title={item.title} rank={item.rank} />;

  return (
    <SafeAreaView style={styles.container}>
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
      <Text style={styles.title}>Leaderboard</Text>
      <View
        style={{
          width: 117,
          height: 117,
          borderRadius: 99999,
          backgroundColor: colors.primary.teal,
          borderWidth: 2,
          borderColor: "white",
        }}
      />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          marginBottom: 32,
          marginTop: 8,
        }}
      >
        Username123
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <StatusBar style="light" />
    </SafeAreaView>
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
    marginTop: 48,
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
  leaderboardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "gainsboro",
    borderBottomWidth: 1,
  },
});
