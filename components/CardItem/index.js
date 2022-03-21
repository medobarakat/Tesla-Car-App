import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import Styles from './styles';
import Button from '../Button';

export default function CardItem({name,tagline,image}) {
    return (
        <View>
            <View style={Styles.carcontainer}>
                <ImageBackground source={image} style={Styles.img} />
                <View style={Styles.textContainer}>
                    <Text style={Styles.header}>{name}</Text>
                    <Text style={Styles.subtitle}>{tagline}</Text>
                </View>
                <View style={Styles.btncontainer}>
                    <Button types="primary" text="Custom Order" onPress={() => console.warn(backgroundColor)} />
                    <Button types="Secondry" text="existing inventory" />
                </View>


            </View>
        </View>
    )
}