import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#4C0066",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#4C0066",
    borderWidth: 3,
    borderRadius: 8,
  },
});
