import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function Lottie() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      { iterations: -1 }
    ).start();
  }, []);

  return (
    <LottieView
      source={require("../scooter.json")}
      progress={animatedValue}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
  },
});

export default Lottie;
