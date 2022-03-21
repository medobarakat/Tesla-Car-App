import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Styles from './styles'

export default function Button({types , text}) {
    //  const types = props.types;

    const backgroundColor =  types === "primary" ? "#171a20cc" : "#ffffffa6";
    const textColor= types === "primary" ? "white" : "#171a20cc";
    return (
        <View style={Styles.container}>
            <Pressable
            style={[Styles.button,{backgroundColor:backgroundColor}]}
            >
            <Text style={[Styles.btnText , {color:textColor}]}>{text}</Text>
            </Pressable>
        </View>
    )
}