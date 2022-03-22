import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import CarsList from "./components/CarsList";
import Styles from "./components/CardItem/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={Styles.container}>
      <Header />
      <CarsList />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}
