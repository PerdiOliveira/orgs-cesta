import React from "react";
import StyledText from "../../components/StyledText";
import { StyleSheet, Image, View } from "react-native";

const ListaItens = ({ item: { imagem, nome } }) => {
  return (
    <>
      <View key={nome} style={estilos.lista}>
        <Image style={estilos.imagemItem} source={imagem} />
        <StyledText style={estilos.nomeItem}>{nome}</StyledText>
      </View>
    </>
  );
};

export default ListaItens;

const estilos = StyleSheet.create({
  lista: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    marginHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  nomeItem: {
    lineHeight: 26,
    fontSize: 16,
    color: "#464646",
    marginLeft: 11,
  },
  imagemItem: {
    width: 46,
    height: 46,
  },
});
