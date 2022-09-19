//Imports
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import MyInput from "./components/MyInput";


//Especificação do componente
const App = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();

  const calcularIMC = () => {
    let imc = peso / (altura * altura);

    setResultado("O seu IMC é: " + imc.toFixed(2));
  };

  return (
    
    <View style={styles.imagemBak}>
      {<ImageBackground style={styles.imagem} source={require('./imagens/vaccine-background.jpg')} />}
    
    
    
      <View style={styles.container}>
      
      <Image style={styles.imagem} source={require("./imagens/balanca.jpg")} />
      
      <Text style={styles.textTitulo}>Calculadora de IMC JRMS</Text>

      <View style={styles.inputs}>
        <MyInput rotulo="Peso" valor={peso} setText={setPeso} />
        <MyInput rotulo="Altura" valor={altura} setText={setAltura} />
      </View>

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>CALCULAR</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 24, marginTop: 30 }}>{resultado}</Text>
    </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15
    
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: "#5555EE",
    borderRadius: 20,
    elevation: 5,
    marginTop: 30
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  inputs: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "stretch"
    
  },
  imagemBak: {
    flex 1,
    width: 200,
    height: 200,
    resizeMode: "stretch"
    
  },
  
  
  
  textTitulo: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold"
  }
});

//Export
export default App;
