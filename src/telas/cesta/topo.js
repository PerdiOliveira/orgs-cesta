import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import StyledText from "../../components/StyledText";

const width = Dimensions.get("screen").width;

const Topo = ({ titulo, imagemTopo }) => {
  return (
    <>
      <Image source={imagemTopo} style={estilos.topo} />
      <StyledText style={estilos.titulo}>{titulo}</StyledText>
    </>
  );
};

export default Topo;

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
});
