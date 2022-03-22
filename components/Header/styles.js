import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    zIndex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  img: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  logo: {
    marginTop: "-20%",
    width: 30,
    resizeMode: "contain",
  },
});

export default Styles;
