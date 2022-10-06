import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const StyledButton = ({ textoBotao }) => {
  return (
    <>
      <TouchableOpacity style={estilos.botao}>
        <StyledText style={estilos.textoBotao}>{textoBotao}</StyledText>
      </TouchableOpacity>
    </>
  );
};

export default StyledButton;

const estilos = StyleSheet.create({
  botao: {
    paddingVertical: 16,
    marginTop: 16,
    backgroundColor: "#2A9F85",
    borderRadius: 20,
  },
  textoBotao: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
  },
});
