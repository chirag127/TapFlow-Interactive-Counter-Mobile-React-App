import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    loadHighScore();
  }, []);

  // Load the high score from AsyncStorage
  const loadHighScore = async () => {
    const storedHighScore = await AsyncStorage.getItem("highScore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore));
    }
  };

  // Update the count and check for high score
  const handleTap = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount > highScore) {
      setHighScore(newCount);
      AsyncStorage.setItem("highScore", newCount.toString());
    }
  };

  // Reset the counter
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Counter</Text>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.highScore}>High Score: {highScore}</Text>

      <TouchableOpacity style={styles.button} onPress={handleTap}>
        <Text style={styles.buttonText}>Tap Me!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetCounter}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  count: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
  },
  highScore: {
    fontSize: 20,
    marginBottom: 20,
    color: "gray",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: "#ff4444",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
