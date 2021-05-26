import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const minutesToMilis = (min) => min * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes = 20, isPaused = true, onProgress }) => {
  const [milis, setMilis] = useState(null);
  const minute = Math.floor(milis / 60 / 1000) % 60;
  const seconds = Math.floor(milis / 1000) % 60;

  const interval = useRef(null);
  const countdown = () => {
    setMilis((time) => {
      if (time === 0) {
        return time;
      }
      const leftTime = time - 1000;
      onProgress(leftTime / minutesToMilis(minutes));
      return leftTime;
    });
  };
  useEffect(() => {
    setMilis(minutesToMilis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

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
