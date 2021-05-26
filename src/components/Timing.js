import React from "react";
import { View, StyleSheet } from "react-native";
import FocusButton from "./FocusButton";

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <FocusButton title="10" onPress={() => onChangeTime(10)} />
      <FocusButton title="15" onPress={() => onChangeTime(15)} />
      <FocusButton title="20" onPress={() => onChangeTime(20)} />
    </View>
  );
};
export default Timing;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
