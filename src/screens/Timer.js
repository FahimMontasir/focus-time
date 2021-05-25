import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CountDown from "../components/CountDown";
import { colors } from "../utils/colors";
import { size } from "../utils/size";

const Timer = ({ focusName }) => {
  return (
    <View>
      <CountDown />
      <Text style={styles.title}>Focusing On:</Text>
      <Text style={styles.title}>{focusName}</Text>
    </View>
  );
};
export default Timer;

const styles = StyleSheet.create({
  title: {
    fontSize: size.sm,
    color: colors.white,
    textAlign: "center",
  },
});
