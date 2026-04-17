import React from "react";
import { View, Text, Button } from "react-native";


export default function Pagamento({ voltarCarrinho, confirmarPagamento }) {
 return (
   <View style={{ flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }}>
     <Text style={{ fontSize: 22, marginBottom: 20 }}>Pagamento</Text>
     <Text style={{ fontSize: 16, marginBottom: 40 }}>
       Revise os detalhes e confirme seu pagamento para finalizar a compra.
     </Text>


     <Button title="Confirmar Pagamento" onPress={confirmarPagamento} />
     <View style={{ marginTop: 15 }}>
       <Button title="Voltar ao Carrinho" onPress={voltarCarrinho} />
     </View>
   </View>
 );
}
