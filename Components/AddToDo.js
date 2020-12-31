import React, { useState } from 'react'
import {  Button, StyleSheet, TextInput, View } from 'react-native';
export default function AddToDo({addToDo}) {
    const [inputText,setInputText] = useState("");
    return (
        <View>
            <TextInput style={styles.input} 
                placeholder="Add TODO"
                onChangeText={(val)=>{setInputText(val)}}
                
             />
            <Button title="ADD TODO" onPress={()=>{addToDo(inputText);}} color="coral" />
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        padding:10,
        borderBottomWidth:1
    }
});