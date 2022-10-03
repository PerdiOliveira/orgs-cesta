import React from "react";
import { Text, StyleSheet } from "react-native";

export default function StyledText({ children, style }) {
  let estilo = estilos.texto;

  style?.fontWeight === "bold"
    ? (estilo = estilos.textoNegrito)
    : (estilo = estilos.texto);

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
