import { Alert } from 'react-native';
import { InterfaceCliente } from '../interface/InterfaceCliente';

export async function salvarCliente(
   idEdicao: number | undefined,
   cliente: InterfaceCliente,
   URL_DA_API: string
) {
   const { nome, email, data_cadastro } = cliente;

   if (!nome || !email || !data_cadastro) {
      Alert.alert('Erro', 'Por favor, realize o preenchimento de todos os campos!');
      return;
   }

   const dadosCliente = {
      nome: nome.trim(),
      email: email.trim(),
      data_cadastro
   };

   const urlFinal = idEdicao === undefined
      ? URL_DA_API
      : `${URL_DA_API}/${idEdicao}`;
   const metodoHttp = idEdicao === undefined ? 'POST' : 'PUT';

   await fetch(urlFinal, {
      method: metodoHttp,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosCliente)
   })
      .then((resposta) => resposta.json())
      .then(() => {
         Alert.alert(
            'Sucesso!',
            idEdicao === undefined
               ? 'Cliente cadastrado no MySQL!'
               : 'Cliente atualizado no MySQL!'
         );
      })
      .catch((erro) => console.error('Erro ao processar requisição no servidor:', erro));
}