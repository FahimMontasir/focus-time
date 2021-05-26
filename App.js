import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FocusButton from "./src/components/FocusButton";
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
    setHistory([
      ...history,
      { key: String(history.length + 1), subject, status },
    ]);
  };

  const saveHistory = async () => {
    try {
      const data = JSON.stringify(history);
      await AsyncStorage.setItem("@asyncHistory", data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadHistory = async () => {
    try {
      const historyAsync = await AsyncStorage.getItem("@asyncHistory");
      if (historyAsync && JSON.parse(historyAsync).length) {
        setHistory(JSON.parse(historyAsync));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    saveHistory();
  }, [history]);

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
          {history.length > 0 && (
            <>
              <FocusHistory focusHistory={history} />
              <FocusButton title="Clear" onPress={() => setHistory([])} />
            </>
          )}
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
