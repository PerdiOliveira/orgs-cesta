import React from "react";
import { StyleSheet, View } from "react-native";
import StyledButton from "../../components/StyledButton";
import Detalhes from "./detalhes";
import Topo from "./topo";

export default function Cesta({ topo, detalhes, botao }) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <StyledButton {...botao} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
