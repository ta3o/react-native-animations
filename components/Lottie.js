import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function Lottie() {
  return (
    <LottieView
      source={require("../fireworks.json")}
      style={styles.container}
      autoPlay
      loop
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
  },
});

export default Lottie;
