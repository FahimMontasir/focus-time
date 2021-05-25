import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/screens/Focus";
import Timer from "./src/screens/Timer";
import { colors } from "./src/utils/colors";
import { space } from "./src/utils/size";

export default function App() {
  const [focus, setFocus] = useState("Gardening");
  return (
    <View style={styles.container}>
      {focus ? <Timer focusName={focus} /> : <Focus addFocus={setFocus} />}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space.sm,
    paddingTop: space.xxl,
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
