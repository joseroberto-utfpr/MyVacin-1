//Imports
import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

//Especificação do componente
const MyInput = (props) => {
  const { rotulo, valor, setText } = props;

  return (
    <View>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        keyboardType="decimal-pad"
        style={styles.textInput}
        value={valor}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rotulo: {
    fontSize: 40
  },
  textInput: {
    fontSize: 40,
    borderWidth: 2,
    borderColor: "gray",
    width: 150
  }
});

//Export
export default MyInput;
