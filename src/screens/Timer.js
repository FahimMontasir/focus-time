import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import CountDown from "../components/CountDown";
import { colors } from "../utils/colors";
import { size } from "../utils/size";
import FocusButton from "../components/FocusButton";
import { ProgressBar } from "react-native-paper";
import Timing from "../components/Timing";

const Timer = ({ focusName }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(20);
  const onProgress = (p) => {
    setProgress(p);
  };
  const onChangeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsPaused(false);
  };
  return (
    <View>
      <CountDown
        minutes={minutes}
        isPaused={!isPaused}
        onProgress={onProgress}
      />
      <Text style={styles.title}>Focusing On:</Text>
      <Text style={styles.title}>{focusName}</Text>
      <ProgressBar
        progress={progress}
        color="#5E84E2"
        style={{ height: 10, marginTop: 10 }}
      />
      <Timing onChangeTime={onChangeTime} />
      <View style={styles.buttonContainer}>
        {isPaused ? (
          <FocusButton
            title="Pause"
            onPress={() => setIsPaused(false)}
            size={110}
          />
        ) : (
          <FocusButton
            title="Start"
            onPress={() => setIsPaused(true)}
            size={110}
          />
        )}
      </View>
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
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});
