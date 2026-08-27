import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PropriedadesLivro } from '../interface/PropriedadesLivro';

export default function ItemLivro(props: PropriedadesLivro) {
   return (
      <TouchableOpacity
         style={estilos.cartao}
         onPress={() => props.iniciarEdicao(props.item)}
         activeOpacity={0.7}
      >
         <View style={estilos.cabecalhoCartao}>
            <View style={estilos.detalhesLivro}>
               <Text style={estilos.livroTitulo}>{props.item.titulo}</Text>
               <Text style={estilos.livroAutor}>Por: {props.item.autor}</Text>
            </View>
            <TouchableOpacity
               style={estilos.botaoDeletar}
               onPress={() => props.excluirLivro(props.item.id)}
            >
               <Text style={estilos.botaoDeletarTexto}>Excluir</Text>
            </TouchableOpacity>
         </View>

         <View style={estilos.fileiraInfo}>
            <Text style={estilos.livroPreco}>R$ {Number(props.item.preco).toFixed(2)}</Text>
            <Text style={estilos.livroEstoque}>Estoque: {props.item.estoque}</Text>
         </View>
         <Text style={estilos.dicaEdicao}>Toque para editar</Text>
      </TouchableOpacity>
   );
}

const estilos = StyleSheet.create({
   cartao: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, elevation: 1 },
   cabecalhoCartao: { flexDirection: 'row', alignItems: 'flex-start' },
   detalhesLivro: { flex: 1, minWidth: 0, marginRight: 8 },
   livroTitulo: { fontSize: 16, fontWeight: 'bold', flexShrink: 1 },
   livroAutor: { fontSize: 13, color: '#666' },
   botaoDeletar: { backgroundColor: '#d32f2f', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4 },
   botaoDeletarTexto: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
   fileiraInfo: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 6 },
   livroPreco: { fontSize: 14, fontWeight: 'bold', color: '#2e7d32' },
   livroEstoque: { fontSize: 13, color: '#ed6c02' },
   dicaEdicao: { fontSize: 10, color: '#999', textAlign: 'right', marginTop: 4, fontStyle: 'italic' }
});