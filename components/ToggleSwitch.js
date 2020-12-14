import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: isChecked ? "green" : "lightgray" },
      ]}
      onPress={() => setIsChecked((prevState) => !prevState)}
    >
      <View style={[styles.check, { left: isChecked ? 55 : 5 }]} />
    </Pressable>
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

export default ToggleSwitch;
