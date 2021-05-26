import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FocusHistory from "./src/components/FocusHistory";
import Focus from "./src/screens/Focus";
import Timer from "./src/screens/Timer";
import { colors } from "./src/utils/colors";
import { space } from "./src/utils/size";
const STATUS = {
  completed: 1,
  cancelled: 0,
};
export default function App() {
  const [focus, setFocus] = useState(null);
  const [history, setHistory] = useState([]);

  const handleHistory = (subject, status) => {
    setHistory([...history, { subject, status }]);
  };
  console.log(history);
  return (
    <View style={styles.container}>
      {focus ? (
        <Timer
          focusName={focus}
          onTimerEnd={() => {
            handleHistory(focus, STATUS.completed);
            setFocus(null);
          }}
          clearFocus={() => {
            handleHistory(focus, STATUS.cancelled);
            setFocus(null);
          }}
        />
      ) : (
        <>
          <Focus addFocus={setFocus} />
          {history.length > 0 && <FocusHistory focusHistory={history} />}
        </>
      )}
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
