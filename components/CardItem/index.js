import { View, Text, ImageBackground } from "react-native";
import React from "react";
import Styles from "./styles";
import Button from "../Button";

export default function CardItem(props) {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View>
      <View style={Styles.carcontainer}>
        <ImageBackground source={image} style={Styles.img} />
        <View style={Styles.textContainer}>
          <Text style={Styles.header}>{name}</Text>
          <Text style={Styles.subtitle}>
            {tagline} <Text style={Styles.subtitleCta}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={Styles.btncontainer}>
          <Button types="primary" text="Custom Order" />
          <Button types="Secondry" text="existing inventory" />
        </View>
      </View>
    </View>
  );
}
