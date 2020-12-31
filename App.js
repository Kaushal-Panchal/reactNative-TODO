import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddToDo from './Components/AddToDo';
import Header from './Components/Header';
import ToDoItems from './Components/ToDoItems';

export default function App() {
  const [todos,setTodos] = useState([
    {text:"get a coffee",key:"1"},
    {text:"Break Up",key:"2"},
    {text:"Patch Up",key:"3"},
  ]);
  const deleteTodo = (key)=>{
    setTodos((prev)=>{
      return prev.filter((item)=> item.key!=key);
    })
  }
  const addToDoList = (inputText)=>{
    if(inputText===""){
      Alert.alert("Oops","You can't enter empty todo",[
        {text:"Got It"}

      ])
      return;
    }
    setTodos((prev)=>{
      return [...prev,{text:inputText,key:Math.random().toString()}]
    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <AddToDo addToDo={addToDoList}></AddToDo>
        <View style={styles.list}>
          <FlatList data={todos} 
            renderItem={({item})=>(<ToDoItems item={item} onPressHandler={deleteTodo} />)}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
  content:{
    flex:1,
    padding:50,
  },
  list:{
    marginTop:15,
    flex:1,
  }
});
