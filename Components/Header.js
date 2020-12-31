import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header() {
    return (
        <View style={styles.head}>
            <Text style={styles.text}>TO-DO</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    head:{
        height:80,
        padding:35,
        backgroundColor:"wheat"
    },
    text:{
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold'
    }

});