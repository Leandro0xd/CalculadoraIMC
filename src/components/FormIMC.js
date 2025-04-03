import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Result from "./components/Result";
import Classification from "./components/Classification";
import IdealWeight from "./components/IdealWeight";

const FormIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");
  const [pesoIdeal, setPesoIdeal] = useState({ min: null, max: null });

  // Função para calcular o IMC e os valores relacionados
  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      
      setImc(imcCalculado);
      setClassificacao(classificarIMC(imcCalculado));
      setPesoIdeal(calcularPesoIdeal(alturaMetros));
    }
  };

  // Função para classificar o IMC conforme a tabela
  const classificarIMC = (valor) => {
    if (valor < 18.5) return "Abaixo do peso";
    if (valor >= 18.5 && valor < 24.9) return "Peso normal";
    if (valor >= 25 && valor < 29.9) return "Sobrepeso";
    if (valor >= 30 && valor < 34.9) return "Obesidade grau 1";
    if (valor >= 35 && valor < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3 (obesidade mórbida)";
  };

  // Função para calcular o peso ideal com base na altura
  const calcularPesoIdeal = (alturaMetros) => ({
    min: (18.5 * (alturaMetros * alturaMetros)).toFixed(2),
    max: (24.9 * (alturaMetros * alturaMetros)).toFixed(2),
  });

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      
      {imc && (
        <>
          <Result imc={imc} />
          <Classification classificacao={classificacao} />
          <IdealWeight pesoIdeal={pesoIdeal} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default FormIMC;
