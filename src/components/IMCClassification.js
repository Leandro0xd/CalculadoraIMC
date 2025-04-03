import React from "react";
import { Text, View, StyleSheet } from "react-native";

const IMCClassification = ({ classificacao }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação: {classificacao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default IMCClassification;
