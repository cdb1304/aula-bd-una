import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PropriedadesPedido } from '../interface/PropriedadesPedido';

export default function ItemPedido(props: PropriedadesPedido) {
   return (
      <TouchableOpacity
         style={estilos.cartao}
         onPress={() => props.iniciarEdicao(props.item)}
         activeOpacity={0.7}
      >
         <View style={estilos.cabecalhoCartao}>
            <View style={estilos.detalhesPedido}>
               <Text style={estilos.pedidoTitulo}>Pedido #{props.item.id}</Text>
               <Text style={estilos.pedidoInfo}>Cliente #{props.item.id_cliente} — Livro #{props.item.id_livro}</Text>
            </View>
            <TouchableOpacity
               style={estilos.botaoDeletar}
               onPress={() => props.excluirPedido(props.item.id)}
            >
               <Text style={estilos.botaoDeletarTexto}>Excluir</Text>
            </TouchableOpacity>
         </View>

         <View style={estilos.fileiraInfo}>
            <Text style={estilos.pedidoData}>{props.item.data_pedido}</Text>
            <Text style={estilos.pedidoQuantidade}>Qtd: {props.item.quantidade}</Text>
         </View>
         <Text style={estilos.dicaEdicao}>Toque para editar</Text>
      </TouchableOpacity>
   );
}

const estilos = StyleSheet.create({
   cartao: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, elevation: 1 },
   cabecalhoCartao: { flexDirection: 'row', alignItems: 'flex-start' },
   detalhesPedido: { flex: 1, minWidth: 0, marginRight: 8 },
   pedidoTitulo: { fontSize: 16, fontWeight: 'bold', flexShrink: 1 },
   pedidoInfo: { fontSize: 13, color: '#666' },
   botaoDeletar: { backgroundColor: '#d32f2f', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4 },
   botaoDeletarTexto: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
   fileiraInfo: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 6 },
   pedidoData: { fontSize: 13, color: '#2e7d32' },
   pedidoQuantidade: { fontSize: 13, color: '#ed6c02' },
   dicaEdicao: { fontSize: 10, color: '#999', textAlign: 'right', marginTop: 4, fontStyle: 'italic' }
});