import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { size } from "../utils/size";

const FocusButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};
export default FocusButton;
const styles = StyleSheet.create({
  container: {
    width: size.xl,
    height: size.xl,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: size.md,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    fontSize: 25,
    color: colors.white,
  },
});
