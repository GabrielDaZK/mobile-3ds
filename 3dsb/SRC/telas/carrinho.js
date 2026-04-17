import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';


export default function Carrinho({ itens, voltarCatalogo, fecharPedido, irParaHistorico }) {
  const [carrinho, setCarrinho] = useState(itens);


  const aumentarQuantidade = (id) => {
    setCarrinho(carrinho.map(item =>
      item.id === id ? { ...item, quantidade: (item.quantidade || 1) + 1 } : item
    ));
  };


  const diminuirQuantidade = (id) => {
    setCarrinho(carrinho.map(item =>
      item.id === id && (item.quantidade || 1) > 1
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    ));
  };


  const excluirItem = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };


  const total = carrinho.reduce(
    (soma, item) => soma + (item.preco || 0) * (item.quantidade || 1),
    0
  );


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho de Compras</Text>


      {carrinho.length === 0 ? (
        <Text>Seu carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
              <Text style={styles.item}>
                {item.nome} - R$ {item.preco.toFixed(2)} x {item.quantidade || 1}
              </Text>
              <Button title="+" onPress={() => aumentarQuantidade(item.id)} />
              <Button title="-" onPress={() => diminuirQuantidade(item.id)} />
              <Button title="Excluir" onPress={() => excluirItem(item.id)} />
            </View>
          )}
        />
      )}


      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      <Button title="Voltar ao Catálogo" onPress={voltarCatalogo} />
      <Button title="Fechar Pedido" onPress={fecharPedido} />
      <Button title="Fazer Pagamento" onPress={() => alert("Pagamento em desenvolvimento")} />
      <Button title="Ver Histórico de Pedidos" onPress={irParaHistorico} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, paddingTop: 60 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  total: { fontSize: 18, marginTop: 20 },
  itemContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  itemImagem: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  item: { fontSize: 16, flex: 1 },
});



