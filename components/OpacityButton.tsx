import { useState } from "react";
import { Text, Pressable, TextStyle, ViewStyle } from "react-native";

export default function OpacityButton({
  buttonStyles,
  buttonText,
  children,
  onPress,
}: {
  buttonStyles?: ViewStyle;
  buttonText?: TextStyle;
  children: JSX.Element | string;
  onPress?: () => void;
}) {
  const [opacityPressed, setOpacityPressed] = useState(0);

  return (
    <Pressable
      onPress={() => {
        setOpacityPressed(opacityPressed + 1);
        onPress && onPress();
      }}
      style={({ pressed }) => [buttonStyles, { opacity: pressed ? 0.5 : 1 }]}
    >
      <Text style={buttonText}>{children}</Text>
    </Pressable>
  );
}
