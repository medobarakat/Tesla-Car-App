import { View, Text, Image } from "react-native";
import React from "react";
import Styles from "./styles";

const Header = () => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.img} source={require("../../assets/logo.png")} />
      <Image style={Styles.logo} source={require("../../assets/menu.png")} />
    </View>
  );
};

export default Header;
