import logo from "../../assets/logo.png";
import topo from "../../assets/topo.png";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cesta = {
  topo: {
    titulo: "Detalhes da cesta",
    imagemTopo: topo,
  },
  detalhes: {
    nomeCesta: "Nome da Cesta",
    nomeProdutor: "Nome do Produtor",
    logo: logo,
    descricao: "Descrição",
    preco: "Preço",
  },
  botao: {
    textoBotao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
