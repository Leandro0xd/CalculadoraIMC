import React from "react";
import { Text, View, StyleSheet } from "react-native";

const IdealWeight = ({ pesoIdeal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Peso Ideal: {pesoIdeal.min} kg - {pesoIdeal.max} kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#90EE90",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default IdealWeight;
