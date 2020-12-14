import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, View } from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function AnimatedToggleSwitch() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isChecked ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
      easing: Easing.elastic(),
    }).start();
  }, [isChecked]);

  return (
    <AnimatedPressable
      style={[
        styles.container,
        {
          backgroundColor: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["lightgray", "green"],
          }),
        },
      ]}
      onPress={() => setIsChecked((prevState) => !prevState)}
    >
      <Animated.View
        style={[
          styles.check,
          {
            left: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [5, 55],
            }),
          },
        ]}
      />
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    margin: 10,
    width: 100,
  },
  check: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    position: "absolute",
    top: 5,
    width: 40,
  },
});

export default AnimatedToggleSwitch;
