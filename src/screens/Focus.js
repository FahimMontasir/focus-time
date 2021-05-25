import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import FocusButton from "../components/FocusButton";
import { size, space } from "../utils/size";

const Focus = ({ addFocus }) => {
  const [tempInput, setTempInput] = useState(null);
  return (
    <View>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          placeholder="type your goal"
          onChangeText={(text) => setTempInput(text)}
        />
        <FocusButton onPress={() => addFocus(tempInput)} />
      </View>
    </View>
  );
};
export default Focus;
const styles = StyleSheet.create({
  title: {
    fontSize: size.md,
    color: "white",
    marginBottom: space.sm,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: space.sm,
  },
});
