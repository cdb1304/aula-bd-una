import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { InterfaceLivro } from '../interface/interfaceLivro';
import FormularioLivro from './formularioLivro';
import ItemLivro from './itemLivro';
import { lerLivros } from '../api/lerLivro';
import { salvarLivro } from '../api/salvarLivro';
import { excluirLivro } from '../api/excluirLivro';

const URL: string = 'https://SUA-URL-PUBLICA.app.github.dev/';
const URL_DA_API: string = URL + 'livros';

export default function Principal() {
   const [livros, setLivros] = useState<InterfaceLivro[]>([]);
   const [carregando, setCarregando] = useState<boolean>(true);
   const [titulo, setTitulo] = useState<string>('');
   const [autor, setAutor] = useState<string>('');
   const [preco, setPreco] = useState<string>('');
   const [estoque, setEstoque] = useState<string>('');
   const [idEdicao, setIdEdicao] = useState<number | undefined>(undefined);

   const carregar = () => {
      lerLivros(URL_DA_API).then((dados) => {
         setLivros(dados);
         setCarregando(false);
      });
   };

   const limparFormulario = () => {
      setIdEdicao(undefined);
      setTitulo('');
      setAutor('');
      setPreco('');
      setEstoque('');
   };

   const salvar = async (id: number | undefined, livro: InterfaceLivro) => {
      await salvarLivro(id, livro, URL_DA_API);
      limparFormulario();
      carregar();
   };

   const excluir = async (id: number) => {
      const removido = await excluirLivro(id, URL_DA_API);
      if (removido) {
         if (idEdicao === id) {
            limparFormulario();
         }
         carregar();
      }
   };

   const iniciarEdicao = (livro: InterfaceLivro) => {
      setIdEdicao(livro.id);
      setTitulo(livro.titulo);
      setAutor(livro.autor);
      setPreco(livro.preco.toString());
      setEstoque(livro.estoque.toString());
   };

   useEffect(() => {
      carregar();
   }, []);

   return (
      <SafeAreaProvider>
         <KeyboardAvoidingView
            style={estilos.teclado}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         >
            <SafeAreaView style={estilos.container}>
               <Text style={estilos.titulo}>Painel CRUD Livraria (MySQL)</Text>
               <FormularioLivro
                  titulo={titulo} setTitulo={setTitulo}
                  autor={autor} setAutor={setAutor}
                  preco={preco} setPreco={setPreco}
                  estoque={estoque} setEstoque={setEstoque}
                  idEdicao={idEdicao}
                  salvarDados={salvar}
                  limparFormulario={limparFormulario}
               />

               {carregando ? (
                  <ActivityIndicator size="large" color="#0000ff" />
               ) : (
                  <FlatList
                     style={estilos.lista}
                     contentContainerStyle={estilos.conteudoLista}
                     data={livros}
                     keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                     renderItem={({ item }) => (
                        <ItemLivro
                           item={item}
                           iniciarEdicao={iniciarEdicao}
                           excluirLivro={(id) => {
                              if (id !== undefined) {
                                 excluir(id);
                              }
                           }}
                        />
                     )}
                  />
               )}
            </SafeAreaView>
         </KeyboardAvoidingView>
      </SafeAreaProvider>
   );
}

const estilos = StyleSheet.create({
   teclado: { flex: 1 },
   container: { flex: 1, width: '100%', backgroundColor: '#f5f5f5', paddingHorizontal: 16, paddingTop: 10 },
   lista: { flex: 1, width: '100%' },
   conteudoLista: { paddingBottom: 24 },
   titulo: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 }
});