import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import StyledButton from "../components/StyledButton";
import StyledText from "../components/StyledText";
import Detalhes from "./cesta/detalhes";
import ListaItens from "./cesta/listaItens";
import Topo from "./cesta/topo";

export default function Cesta({ topo, detalhes, botao, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={ListaItens}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <StyledButton {...botao} />
                <StyledText style={estilos.titulo}>{itens.titulo}</StyledText>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titulo: {
    color: "#464646",
    marginTop: 32,
    marginBottom: 8,
    fontWeight: "bold",
    lineHeight: 32,
    fontSize: 20,
  },
});
