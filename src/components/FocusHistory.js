import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const render = ({ item, index }) => (
  <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
);

const FocusHistory = ({ focusHistory, onClear }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What I've focused on</Text>
      {focusHistory && (
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1, alignItems: "center" }}
          data={focusHistory}
          renderItem={render}
        />
      )}
    </View>
  );
};
export default FocusHistory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 50,
    fontSize: 25,
    color: "white",
  },
  historyItem: (status) => ({
    color: status > 0 ? "green" : "red",
    fontSize: 20,
  }),
});
