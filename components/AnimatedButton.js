import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function AnimatedButton() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isChecked ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.elastic(),
    }).start();
  }, [isChecked]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setIsChecked((prevState) => !prevState)}
    >
      <View style={styles.border} />
      <Animated.View
        style={[
          styles.checkContainer,
          {
            opacity: animatedValue,
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0.8, 1.05, 1],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.check}>✓</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 100,
    margin: 10,
    width: 100,
  },
  border: {
    ...StyleSheet.absoluteFill,
    borderColor: "lightgray",
    borderRadius: 8,
    borderWidth: 4,
  },
  checkContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
  },
  check: {
    color: "white",
    fontSize: 50,
  },
});

export default AnimatedButton;
