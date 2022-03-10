import { useState } from "react";
import {
  Text,
  Pressable,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { colors } from "../styles/base";

type buttonType = "fill" | "outline" | "custom";

export default function OpacityButton({
  buttonType,
  buttonStyles,
  buttonText,
  children,
  onPress,
  icon,
}: {
  buttonType: buttonType;
  buttonStyles?: ViewStyle;
  buttonText?: TextStyle;
  children: JSX.Element | string;
  onPress?: () => void;
  icon?: JSX.Element;
}) {
  const [opacityPressed, setOpacityPressed] = useState(0);

  return (
    <Pressable
      onPress={() => {
        setOpacityPressed(opacityPressed + 1);
        onPress && onPress();
      }}
      style={({ pressed }) => [
        buttonType === "fill" && styles.fillButton,
        buttonType === "outline" && styles.outlineButton,
        buttonStyles,
        { opacity: pressed ? 0.5 : 1 },
        { justifyContent: "center" },
        { alignItems: "center" },
        { flexDirection: "row" },
      ]}
    >
      {icon}
      <Text
        style={[
          buttonType === "fill" && styles.fillButtonText,
          buttonType === "outline" && styles.outlineButtonText,
          buttonText,
          { marginLeft: icon && 16 },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fillButton: {
    backgroundColor: colors.primary.teal,
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderRadius: 4,
  },
  fillButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  outlineButton: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 308,
    padding: 8,
    borderWidth: 1,
    color: colors.secondary.slateBlue,
    borderColor: colors.secondary.slateBlue,
    borderStyle: "solid",
    fontSize: 16,
    borderRadius: 4,
  },
  outlineButtonText: {
    textAlign: "center",
    color: colors.secondary.slateBlue,
    fontSize: 16,
  },
});
