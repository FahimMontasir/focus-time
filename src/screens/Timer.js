import React, { useState } from "react";
import { Text, View, StyleSheet, Vibration, Platform } from "react-native";
import CountDown from "../components/CountDown";
import { colors } from "../utils/colors";
import { size } from "../utils/size";
import FocusButton from "../components/FocusButton";
import { ProgressBar } from "react-native-paper";
import Timing from "../components/Timing";
import { useKeepAwake } from "expo-keep-awake";

const Timer = ({ focusName, onTimerEnd, clearFocus }) => {
  useKeepAwake();
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onProgress = (p) => {
    setProgress(p);
  };
  const onChangeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsPaused(false);
  };
  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 5000);
    } else {
      Vibration.vibrate(5000);
    }
  };
  const onEnd = () => {
    vibrate();
    setMinutes(0);
    setProgress(1);
    setIsPaused(false);
    onTimerEnd();
  };
  return (
    <View style={styles.container}>
      <CountDown
        onEnd={onEnd}
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
      <View style={styles.backBtn}>
        <FocusButton title="Clr" onPress={clearFocus} />
      </View>
    </View>
  );
};
export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: size.sm,
    color: colors.white,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  backBtn: {
    position: "absolute",
    bottom: 20,
  },
});
