import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import CardItem from './components/CardItem';
import Styles from './components/CardItem/styles';

export default function App() {
  return (
    <View style={Styles.container}>
     <CardItem name="Model s" tagline="starting from 99.999 $" image={require("./assets/Model3.jpeg")}/>
      <StatusBar style="auto" />
    </View>
  );
}

