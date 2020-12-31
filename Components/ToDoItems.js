import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
export default function ToDoItems({item,onPressHandler}) {
    return (
        <TouchableOpacity onPress={()=>{onPressHandler(item.key)}}>
            <View style={ styles.item}>
            <Entypo name="cross" size={25} color="gray" />
            <Text >{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        alignItems:"center",       
        padding:15,
        marginTop:10,
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:20,
    }
});
