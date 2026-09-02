import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { PropriedadesFormularioCliente } from '../interface/PropriedadesFormularioCliente';
import { InterfaceCliente } from '../interface/InterfaceCliente';

export default function FormularioCliente(props: PropriedadesFormularioCliente) {
   return (
      <View style={[estilos.formulario, props.idEdicao !== undefined && estilos.formularioEdicao]}>
         <Text style={estilos.formularioTitulo}>
            {props.idEdicao !== undefined ? 'Editando Registro' : 'Novo Cliente'}
         </Text>

         <TextInput
            style={estilos.entradaTexto}
            placeholder="Nome do Cliente"
            value={props.nome}
            onChangeText={props.setNome}
         />
         <TextInput
            style={estilos.entradaTexto}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={props.email}
            onChangeText={props.setEmail}
         />
         <TextInput
            style={estilos.entradaTexto}
            placeholder="Data de Cadastro (AAAA-MM-DD)"
            value={props.dataCadastro}
            onChangeText={props.setDataCadastro}
         />

         <View style={estilos.fileiraAcoes}>
            <TouchableOpacity
               style={[estilos.botao, props.idEdicao !== undefined
                  ? estilos.botaoLaranja
                  : estilos.botaoVerde]}
               onPress={() => {
                  const cliente: InterfaceCliente = {
                     id: props.idEdicao,
                     nome: props.nome,
                     email: props.email,
                     data_cadastro: props.dataCadastro
                  };
                  props.salvarDados(props.idEdicao, cliente);
               }}
            >
               <Text style={estilos.botaoTexto}>
                  {props.idEdicao !== undefined ? 'Atualizar no MySQL' : 'Salvar no MySQL'}
               </Text>
            </TouchableOpacity>

            {props.idEdicao !== undefined && (
               <TouchableOpacity style={estilos.botaoCancelar} onPress={props.limparFormulario}>
                  <Text style={estilos.cancelarTexto}>Cancelar</Text>
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
}

const estilos = StyleSheet.create({
   formulario: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 15, elevation: 2, borderWidth: 1, borderColor: '#eee' },
   formularioEdicao: { borderColor: '#ed6c02', backgroundColor: '#fffbf7' },
   formularioTitulo: { fontSize: 14, fontWeight: 'bold', color: '#555', marginBottom: 8 },
   entradaTexto: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 5, marginBottom: 8 },
   fileiraAcoes: { flexDirection: 'row', marginTop: 4 },
   botao: { flex: 2, padding: 12, borderRadius: 5, alignItems: 'center' },
   botaoVerde: { backgroundColor: '#2e7d32' },
   botaoLaranja: { backgroundColor: '#ed6c02' },
   botaoCancelar: { flex: 1, backgroundColor: '#777', padding: 12, borderRadius: 5, alignItems: 'center', marginLeft: 8 },
   botaoTexto: { color: '#fff', fontWeight: 'bold' },
   cancelarTexto: { color: '#fff', fontWeight: 'bold' }
});