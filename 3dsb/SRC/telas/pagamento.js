import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function Pagamento({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Pagamento</Text>


      <Text style={{ fontSize: 16, marginBottom: 40 }}>
        Revise os detalhes e confirme seu pagamento para finalizar a compra.
      </Text>


      {/* Texto simples, sem uso de total */}
      <Text style={styles.info}>O valor do pedido será confirmado no pagamento.</Text>


      <Button
        title="Pagar com Cartão"
        onPress={() => alert("Simulação: pagamento com Cartão realizado!")}
      />
      <Button
        title="Pagar com Pix"
        onPress={() => alert("Simulação: pagamento com Pix realizado!")}
      />


      <Button title="Voltar ao Carrinho" onPress={() => navigation.goBack()} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  titulo: { fontSize: 22, marginBottom: 20, fontWeight: "bold" },
  info: { fontSize: 16, marginBottom: 30, color: "#333" },
});
