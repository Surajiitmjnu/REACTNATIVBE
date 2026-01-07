import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  // 🔹 Load data from local storage
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem('TODOS');
      if (storedTodos !== null) {
        setTodoList(JSON.parse(storedTodos));
        console.log(JSON.parse(storedTodos)+"this is goodf")
      }
    } catch (error) {
      console.log('Error loading todos', error);
    }
  };

  // 🔹 Save data to local storage
  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem('TODOS', JSON.stringify(todos));
      console.log(JSON.stringify(todos))
    } catch (error) {
      console.log('Error saving todos', error);
    }
  };

  const addTask = () => {
    if (task.trim() === '') return;

    const newTodos = [
      ...todoList,
      { id: Date.now().toString(), title: task },
    ];

    setTodoList(newTodos);
    saveTodos(newTodos);
    setTask('');
  };

  const deleteTask = async (id) => {
    const newTodos = todoList.filter(item => item.id !== id);
    setTodoList(newTodos);
    saveTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.title}</Text>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: '#0a7cff',
    marginLeft: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
  },
  deleteText: {
    fontSize: 18,
  },
});
