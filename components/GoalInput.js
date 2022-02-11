import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  console.log(enteredGoal);

  const addGoalHandler = () => {
    props.addGoal(enteredGoal);
    setEnteredGoal("dfdfdf");
  };

  //   const goalInputHandler = (enteredValue) => {
  //   setEnteredGoal(enteredValue);
  //   };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.subViewContainer}>
        <TextInput
          style={styles.inputTextContainer}
          placeholder="type your goal here..."
          onChangeText={(enteredValue) => {
            setEnteredGoal(enteredValue);
          }}
        />
        <View style={styles.buttonCss}>
          <View style={styles.button}>
            <Button color="red" title="CANCEL" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  subViewContainer: {
    flex: 1,
    justifyContent: "center",
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
  buttonCss: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
