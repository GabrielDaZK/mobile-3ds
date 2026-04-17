import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';


export default function Carrinho({ itens, voltarCatalogo, fecharPedido, irParaHistorico, }) {
 const total = itens.reduce((soma, item) => soma + (item.preco || 0), 0);


 return (
   <View style={styles.container}>
     <Text style={styles.titulo}>Carrinho de Compras</Text>


     {itens.length === 0 ? (
       <Text>Seu carrinho está vazio.</Text>
     ) : (
       <FlatList
         data={itens}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => (
           <View style={styles.itemContainer}>
             <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
             <Text style={styles.item}>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
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
 item: { fontSize: 16 },
});

