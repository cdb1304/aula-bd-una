import { InterfaceLivro } from '../interface/interfaceLivro';

export async function lerLivros(URL_DA_API: string) {
   let livros: InterfaceLivro[] = [];

   await fetch(URL_DA_API)
      .then((resposta) => resposta.json())
      .then((dados: InterfaceLivro[]) => {
         livros = dados;
      })
      .catch((erro) => console.error('Erro ao buscar livros no banco de dados:', erro));

   return livros;
}