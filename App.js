import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [courseGoal, setCourseGaol] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //Adding a goal item
  const addGoalHandler = (goalTitle) => {
    setCourseGaol((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);

    // setIsAddMode(false);
  };

  //Deleting a goal item
  const removeGoalHandler = (goalId) => {
    setCourseGaol((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };

  //A button for the cancel functionality
  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.mainViewContainer}>
      <Button title="ADD NEW GOAL HERE" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoal={addGoalHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItems
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    padding: 30,
  },
});
