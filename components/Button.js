import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function Button() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setIsChecked((prevState) => !prevState)}
    >
      <View style={styles.border} />
      <View style={[styles.checkContainer, { opacity: isChecked ? 1 : 0 }]}>
        <Text style={styles.check}>✓</Text>
      </View>
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

export default Button;
