import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigator from "./src/utils/Navigator";

export default function App() {
  return (
    <ActionSheetProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigator />
      </SafeAreaProvider>
    </ActionSheetProvider>
  );
}
