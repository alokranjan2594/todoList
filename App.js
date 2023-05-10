import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAdd = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const completetask = (index) => {
    let totalTask = [...taskItem];
    // console.log(event.index);
    totalTask.splice(index, 1);
    setTaskItem(totalTask);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Alok`s Tasks</Text>

        <View style={styles.items}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completetask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write A Task"}
          onChangeText={(text) => setTask(text)}
          value={task}
        ></TextInput>
        <TouchableOpacity style={styles.addWrapper} onPress={() => handleAdd()}>
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 80,
    cursor: "pointer",
  },
  input: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: 50,
    borderRadius: 60,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 15,
  },
  addWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 15,
  },
  add: {
    color: "#4C0066",
    fontSize: 30,
  },
});
