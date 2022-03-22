import { View, Text, Dimensions } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import Styles from "../CarsList/styles";
import Cars from "./Cars";
import CardItem from "../CardItem";

const CarsList = () => {
  return (
    <View style={Styles.listContainer}>
      <FlatList
        data={Cars}
        renderItem={({ item }) => <CardItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
