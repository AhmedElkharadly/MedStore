import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView ,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "./src/screens/HomeScreen/index";
export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView  style={{ backgroundStyle }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <HomeScreen />
    </SafeAreaView >
  );
}
