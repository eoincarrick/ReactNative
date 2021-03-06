import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItems = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onLongPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItems;
