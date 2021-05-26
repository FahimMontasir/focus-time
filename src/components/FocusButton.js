import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { size } from "../utils/size";

const FocusButton = ({ onPress, title = "+", size = 80 }) => {
  return (
    <TouchableOpacity style={styles(size).container} onPress={onPress}>
      <Text style={styles(size).plus}>{title}</Text>
    </TouchableOpacity>
  );
};
export default FocusButton;
const styles = (size) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderColor: colors.white,
      borderWidth: 2,
      borderRadius: size / 2,
      alignItems: "center",
      justifyContent: "center",
    },
    plus: {
      fontSize: size / 4,
      color: colors.white,
    },
  });
