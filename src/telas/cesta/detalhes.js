import React from "react";
import { StyleSheet, Image, View } from "react-native";
import StyledText from "../../components/StyledText";

const Detalhes = ({
  nome,
  nomeCesta,
  nomeProdutor,
  logo,
  descricao,
  preco,
}) => {
  return (
    <>
      <StyledText style={estilos.nomeCesta}>{nomeCesta}</StyledText>
      <View style={estilos.produtor}>
        <Image style={estilos.logo} source={logo} />
        <StyledText style={estilos.nomeProdutor}>{nomeProdutor}</StyledText>
      </View>

      <StyledText style={estilos.descricao}>{descricao}</StyledText>
      <StyledText style={estilos.preco}>{preco}</StyledText>
    </>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  nomeCesta: {
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
