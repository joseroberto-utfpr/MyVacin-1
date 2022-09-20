//Imports
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native-web";
import MyInput from "./src/components/MyInput";

//import { LinearGradient } from "expo-linear-gradient";

//Especificação do componente
const App = () => {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState();

  const backGroundAppImage = require("./src/imagens/vaccine-background.jpg");

  const calcularIMC = () => {
    let imc = peso / (altura * altura);

    setResultado("O seu IMC é: " + imc.toFixed(2));
  };

  return (
    <>
      <ImageBackground
        source={backGroundAppImage}
        resizeMode="cover"
        style={styles.imagemBak}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.imagem}
              source={require("./src/imagens/icon-vaccine.png")}
            />

            <Text style={styles.textTop}> My Health </Text>
          </View>

          <Text style={styles.textTitulo}>
            Controle Suas Vacinas e Fique Seguro
          </Text>

          <View style={styles.inputs}>
            <MyInput rotulo="Peso" valor={peso} setText={setPeso} />
            <MyInput rotulo="Altura" valor={altura} setText={setAltura} />
          </View>
          <Text style={styles.textInfoEmail}>E-mail e/ou senha inválidos.</Text>

          <TouchableOpacity style={styles.buttonIn} onPress={calcularIMC}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAccount} onPress={calcularIMC}>
            <Text style={styles.buttonText}>Criar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonForgotPass}
            onPress={calcularIMC}
          >
            <Text style={styles.buttonText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 24, marginTop: 30 }}>{resultado}</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    opacity: "inherit",
    backgroundColor: "transparent"
  },

  buttonIn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    backgroundColor: "#37BD6D",
    borderRadius: 0,
    elevation: 5,
    marginTop: 30,
    width: "165px",
    fontSize: "28px",
    height: "34px"
  },
  buttonAccount: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    backgroundColor: "#419ED7",
    borderRadius: 0,
    elevation: 5,
    marginTop: 30,
    width: "165px",
    fontSize: "28px",
    height: "34px"
  },
  buttonForgotPass: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 0,
    backgroundColor: "#B5C7D1",
    borderRadius: 0,
    elevation: 5,
    marginTop: 30,
    width: "165px",
    fontSize: "28px",
    height: "34px"
  },

  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },

  inputs: {
    //width: "50%",
    flexDirection: "colum",
    justifyContent: "center",
    marginTop: 40
  },

  imagem: {
    width: 40,
    height: 40,
    resizeMode: "stretch"
  },

  imagemBak: {
    flex: 1,
    justifyContent: "adjust",
    opacity: 1
    //backgroundColor: 'gray',
  },

  textTitulo: {
    flex: 1,
    fontSize: "48px",
    color: "#419ED7",
    fontWeight: "400",
    fontFamily: "AveriaLibre"
  },

  textTop: {
    flex: 1,
    fontSize: 40,

    color: "#419ED7",
    fontWeight: "bold",
    fontFamily: "AveriaLibre"
  },

  textInfoEmail: {
    fontSize: "24px",
    color: "#FD7979",
    fontWeight: "bold",
    fontFamily: "AveriaLibre"
  },

  header: {
    flex: 1,
    marginTop: "85px",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "68px",
    color: "#419ED7",
    fontWeight: "400",
    fontFamily: "AveriaLibre"
  }
});

//Export
export default App;
