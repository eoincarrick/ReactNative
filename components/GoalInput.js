import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredValue) => {
    setEnteredGoal(enteredValue);
  };

  return (
    <View style={styles.subViewContainer}>
      <TextInput
        style={styles.inputTextContainer}
        placeholder="type your goal here..."
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.addGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  subViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputTextContainer: {
    width: "80%",
    textAlign: "center",
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 9,
    marginBottom: 10,
    fontSize: 20,
  },
});

export default GoalInput;
