import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from "react-native";
import { Box } from "./components/ui/box";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <Box className="flex-1 bg-black">
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Box>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
