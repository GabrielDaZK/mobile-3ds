import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import Login from "./SRC/telas/login";
import Cadastro from "./SRC/telas/cadastro";
import Catalogo from "./SRC/telas/catalago";
import Carrinho from "./SRC/telas/carrinho";
import Historico from "./SRC/telas/historico";
import Pagamento from "./SRC/telas/pagamento";   // <-- importar a tela de pagamento


export default function App() {
 const [loading, setLoading] = useState(true);
 const [telaAtual, setTelaAtual] = useState("Login");
 const [carrinho, setCarrinho] = useState([]);
 const [historico, setHistorico] = useState([]);


 useEffect(() => {
   const timer = setTimeout(() => setLoading(false), 2000);
   return () => clearTimeout(timer);
 }, []);


 const adicionarAoCarrinho = (item) => setCarrinho([...carrinho, item]);


 // agora fecharPedido só muda para a tela de pagamento
 const fecharPedido = () => {
   setTelaAtual("Pagamento");
 };


 if (loading) {
   return (
     <View style={{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#fff" }}>
       <Image source={require("./assets/images.png")} style={{ width:200, height:200, resizeMode:"contain" }} />
       <Text style={{ marginTop:20, fontSize:18, fontWeight:"bold" }}>Compras App</Text>
     </View>
   );
 }


 if (telaAtual === "Login") {
   return (
     <Login
       irParaCatalogo={() => setTelaAtual("Catalogo")}
       irParaCadastro={() => setTelaAtual("Cadastro")}
     />
   );
 }


 if (telaAtual === "Cadastro") {
   return <Cadastro voltar={() => setTelaAtual("Login")} />;
 }


 if (telaAtual === "Catalogo") {
   return <Catalogo irParaCarrinho={() => setTelaAtual("Carrinho")} adicionarAoCarrinho={adicionarAoCarrinho} />;
 }


 if (telaAtual === "Carrinho") {
   return (
     <Carrinho
       itens={carrinho}
       voltarCatalogo={() => setTelaAtual("Catalogo")}
       fecharPedido={fecharPedido}
       irParaHistorico={() => setTelaAtual("Historico")}
     />
   );
 }


 if (telaAtual === "Pagamento") {
   return (
     <Pagamento
       voltarCarrinho={() => setTelaAtual("Carrinho")}
       confirmarPagamento={() => {
         alert("Pagamento confirmado!");
         setHistorico([...historico, carrinho]);
         setCarrinho([]);
         setTelaAtual("Historico");
       }}
     />
   );
 }


 if (telaAtual === "Historico") {
   return <Historico pedidos={historico} voltarCatalogo={() => setTelaAtual("Catalogo")} />;
 }


 return null;
}


