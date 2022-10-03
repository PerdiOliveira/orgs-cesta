import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";
import StyledText from "../components/StyledText";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <StyledText style={estilos.titulo}>Detalhes da Cesta</StyledText>
      <View style={estilos.cesta}>
        <StyledText style={estilos.nome}>Nome da Cesta</StyledText>
        <View style={estilos.produtor}>
          <Image style={estilos.logo} source={logo} />
          <StyledText style={estilos.nomeProdutor}>Nome do produtor</StyledText>
        </View>

        <StyledText style={estilos.descricao}>Descrição</StyledText>
        <StyledText style={estilos.preco}>Preço</StyledText>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    padding: 16,
  },

  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  produtor: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  logo: {
    height: 32,
    width: 32,
    marginRight: 8,
  },

  nomeProdutor: {
    fontSize: 16,
    lineHeight: 26,
  },

  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 48,
    marginTop: 8,
  },
});
