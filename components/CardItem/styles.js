import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  carcontainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  textContainer: {
    marginTop: "30%",
    marginLeft: "25%",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 40,
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 17,
    marginTop: "5%",
    color: "#5c5e62",
    textTransform: "capitalize",
  },
  subtitleCta: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  btn: {
    marginTop: "50%",
  },
  btncontainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default Styles;
