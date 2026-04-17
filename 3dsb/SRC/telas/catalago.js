import React from "react";
import { View, Text, FlatList, Image, Button } from "react-native";


const produtos = [
  { id: "1", nome: "Alface", categoria: "Hortaliça", preco: 5, imagem: "https://img.cdndsgni.com/preview/13206058.jpg" },
  { id: "2", nome: "Tomate", categoria: "Fruta", preco: 7, imagem: "https://img.cdndsgni.com/preview/10002716.jpg" },
  { id: "3", nome: "Cenoura", categoria: "Legume", preco: 4, imagem: "https://img.cdndsgni.com/preview/12485137.jpg" },
  { id: "4", nome: "Batata", categoria: "Legume", preco: 4, imagem: "https://img.cdndsgni.com/preview/10600699.jpg" },
  { id: "5", nome: "Maçã", categoria: "Fruta", preco: 12, imagem: "https://img.cdndsgni.com/preview/10002711-m.jpg"},
  { id: "6", nome: "Banana", categoria: "Fruta", preco: 4, imagem: "https://img.cdndsgni.com/preview/10001685-m.jpg"},
  { id: "7", nome: "Brócolis", categoria: "Hortaliça", preco: 6, imagem: "https://img.cdndsgni.com/preview/12986970-m.jpg"},
  { id: "8", nome: "Cebola", categoria: "Legume", preco: 4.55, imagem: "https://img.cdndsgni.com/preview/11174194-m.jpg"},
  { id: "9", nome: "Abacate", categoria: "Fruta", preco: 5.00, imagem: "https://img.cdndsgni.com/preview/12744064.jpg" },
  { id: "10", nome: "Alho", categoria: "Hortaliça", preco: 6.50, imagem: "https://img.cdndsgni.com/preview/13026755.jpg" },
  { id: "11", nome: "Batata doce", categoria: "Legume", preco: 4.00, imagem: "https://img.cdndsgni.com/preview/12744319.jpg"},
  { id: "12", nome: "Laranja", categoria: "Fruta", preco: 4.99, imagem: "https://img.cdndsgni.com/preview/13625341.jpg"}
];


export default function Catalogo({ irParaCarrinho, adicionarAoCarrinho }) {
  return (
    <View style={{ flex: 1, padding: 60 }}>
      <Text style={{ fontSize: 22, marginBottom: 30 }}>Catálogo de Produtos</Text>
      <FlatList
        data={produtos.sort((a, b) => a.nome.localeCompare(b.nome))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <Image source={{ uri: item.imagem }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text>{item.nome} - {item.categoria} - R$ {item.preco},00</Text>
            <Button title="(+)" onPress={() => adicionarAoCarrinho(item)} />
          </View>
        )}
      />
      <Button title="Ir para Carrinho" onPress={irParaCarrinho} />
    </View>
  );
}

