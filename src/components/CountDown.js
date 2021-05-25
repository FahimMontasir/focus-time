import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const minutesToMilis = (min) => min * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes = 1, isPaused }) => {
  const [milis, setMilis] = useState(minutesToMilis(minutes));

  const minute = Math.floor(milis / 60 / 1000) % 60;
  const seconds = Math.floor(milis / 1000) % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};
export default CountDown;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(22,22,22,0.2)",
    padding: 5,
  },
  counter: {
    fontSize: 70,
    color: "white",
    textAlign: "center",
  },
});
