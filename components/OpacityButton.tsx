import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TextStyle,
  ViewStyle,
} from "react-native";

export default function OpacityButton({
  buttonStyles,
  buttonText,
  children,
}: {
  buttonStyles?: ViewStyle;
  buttonText?: TextStyle;
  children: JSX.Element | string;
}) {
  const [opacityPressed, setOpacityPressed] = useState(0);

  return (
    <Pressable
      onPress={() => setOpacityPressed(opacityPressed + 1)}
      style={({ pressed }) => [buttonStyles, { opacity: pressed ? 0.5 : 1 }]}
    >
      <Text style={buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
  buttonText: {},
  logInButton: {
    backgroundColor: "#00B2A9",
    color: "white",
  },
  createAccountButton: {
    backgroundColor: "#00B2A9",
    color: "white",
  },
  newsLitImage: {
    width: 97,
    height: 82,
  },
});
