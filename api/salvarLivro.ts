import { Alert } from 'react-native';
import { InterfaceLivro } from '../interface/interfaceLivro';

export async function salvarLivro(
   idEdicao: number | undefined,
   livro: InterfaceLivro,
   URL_DA_API: string
) {
   const { titulo, autor, preco, estoque } = livro;

   if (!titulo || !autor || !preco || !estoque) {
      Alert.alert('Erro', 'Por favor, realize o preenchimento de todos os campos!');
      return;
   }

   const dadosLivro = {
      titulo: titulo.trim(),
      autor: autor.trim(),
      preco,
      estoque
   };

   const urlFinal = idEdicao === undefined
      ? URL_DA_API
      : `${URL_DA_API}/${idEdicao}`;
   const metodoHttp = idEdicao === undefined ? 'POST' : 'PUT';

   await fetch(urlFinal, {
      method: metodoHttp,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosLivro)
   })
      .then((resposta) => resposta.json())
      .then(() => {
         Alert.alert(
            'Sucesso!',
            idEdicao === undefined
               ? 'Livro cadastrado no MySQL!'
               : 'Livro atualizado no MySQL!'
         );
      })
      .catch((erro) => console.error('Erro ao processar requisição no servidor:', erro));
}