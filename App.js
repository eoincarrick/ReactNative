import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [courseGoal, setCourseGaol] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGaol((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.mainViewContainer}>
      <GoalInput addGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => <GoalItems title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    padding: 30,
  },
});
