import React from "react";
import { View, Text, FlatList, Button } from "react-native";


export default function Historico({ pedidos, voltarCatalogo }) {
 return (
   <View style={{ flex: 1, padding: 20 }}>
     <Text style={{ fontSize: 22, marginBottom: 20 }}>Histórico de Pedidos</Text>


     {pedidos.length === 0 ? (
       <Text>Nenhum pedido realizado ainda.</Text>
     ) : (
       <FlatList
         data={pedidos}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item, index }) => {
           // calcula o total do pedido
           const total = item.reduce((soma, produto) => soma + (produto.preco || 0), 0);


           return (
             <View style={{ marginBottom: 20 }}>
               <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                 Pedido {index + 1} - Total: R$ {total.toFixed(2)}
               </Text>
               {item.map((produto) => (
                 <Text key={produto.id}>
                   • {produto.nome} - R$ {produto.preco.toFixed(2)}
                 </Text>
               ))}
             </View>
           );
         }}
       />
     )}


     <Button title="Voltar ao Catálogo" onPress={voltarCatalogo} />
   </View>
 );
}
