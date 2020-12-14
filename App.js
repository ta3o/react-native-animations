import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import AnimatedButton from "./components/AnimatedButton";
import AnimatedToggleSwitch from "./components/AnimatedToggleSwitch";
import Button from "./components/Button";
import ToggleSwitch from "./components/ToggleSwitch";
import Lootie from "./components/Lottie";
import LootieScooter from "./components/LottieScooter";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <ToggleSwitch />

      <AnimatedToggleSwitch /> */}

      {/* <Button />

      <AnimatedButton /> */}

      {/* <Lootie /> */}

      <LootieScooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
